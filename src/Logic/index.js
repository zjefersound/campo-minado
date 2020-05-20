/**     
 *  Será utilizado o método Fill() pra criar o tabuleiro,
 *  passando o parâmetro do índice para a callback do Map(), o que retornará 
 *  a coordenada do campo, seja para a coluna ou linha. 
 *  
 *  Tendo em vista que os parâmetros da callback são:
 *  (valor, indice, vetor), é preciso passar os 2 primeiros na função
 *  logo usa-se ( _, indice_utilizado ).
 * 
 */
const createBoard = ( rows, columns ) => {
    /** Esse return retornará as linhas */
    return Array(rows).fill(0).map(( _, row ) => {
        /** Esse return retornará as colunas, que por sua vez,
         *  retorna as configs zeradas de um campo.
         */
        return Array(columns).fill(0).map(( _, column ) => {
            return {
                row: row,
                column: column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: 0,
                nearMines: 0,
            };
        });
    });
};

/** Essa função é responsável por distribuir de forma randômica as 
 *  minas do tabuleiro. 
 * 
 *  São pré-requisitos: o tabuleiro e a quantidade de minas em função do nível
 */
const spreadMines = ( board, minesAmount ) => { 
    const rows = board.length;
    const columns = board[0].length;
    let minesPlanted = 0;
    while ( minesPlanted < minesAmount ){
        const rowSel = parseInt( Math.random() * rows, 10 );
        const columnSel = parseInt( Math.random() * columns, 10 );

        if( !board[rowSel][columnSel].mined ){
            board[rowSel][columnSel].mined = true;
            minesPlanted++;
        }
    }
};

/** Função que cria de fato o tabuleiro pronto para inicio de jogo */
const createMinedBoard = ( rows, columns, minesAmount ) => {
    const board = createBoard( rows, columns );
    spreadMines( board, minesAmount );
    return board;
};

/** Clona tabuleiro com metodo map */
const cloneBoard = board => {
    return board.map((rows) => {
        return rows.map((field) => {
            return { ...field };
        });
    });
};

/**
 *  Para obter os vizinhos, usa-se a lógica de que a linha 
 *  e a coluna pode ser uma anterior, atual e a próxima.
 *  Ex: [ linha -1, linha, linha + 1 ] 
 *    
 */
const getNeighbors = ( board, row, column ) => {
    const neighbors = [];
    const rows = [row - 1, row, row + 1];
    const columns = [column - 1, column, column + 1];
    /** O primeiro forEach() percorre as linhas */
    rows.forEach( r => {
        /** O segundo forEach() percorre as colunas */  
        columns.forEach( c => {
            /** Valida para não ser o campo passado */
            const different = r !== row || c !== column;
            /** valida a linha para não estar fora do tabuleiro */
            const validRow = r >= 0 && r < board.length;
            /** valida a coluna para não estar fora do tabuleiro */
            const validColumn = c >= 0 && c < board[0].length;
            // Se as três condições estiverem ok, o vizinho é adicionado
            if( different && validRow && validColumn ){
                neighbors.push( board[r][c] );
            }
        });
    });
    //retorna os vizinhos
    return neighbors;
};

//teste se a vizinhança é segura
const safeNeighborhood = ( board, row, column ) => {
    /** result é o acumulador, que é opcional no método reduce 
     *  ele recece o primeiro elemento do array.
     *  
     *  O valor inicial é que a vizinhança é segura,
     *  o reduce irá percorrer os vizinhos e testar se os vizinhos
     *  estão minados.
     *  Para q no final esteja seguro todos não devem estar minados.
     * 
     */

    //callback do reduce 
    const safes = ( result, neighbor ) => result && !neighbor.mined;
    /** Devido ao reduce, retornará apenas um valor, nesse caso
     *  true ou false para a condição da vizinhança estar segura.
     */
    return getNeighbors( board, row, column ).reduce(safes, true);
};

//abre a o campo
const openField = ( board, row, column ) => {
    const field = board[row][column];
    //Se o campo não esta aberto
    if( !field.opened ){
        //Abre o campo
        field.opened = true;
        //Testa se o campo está minado
        if( field.mined ){
            field.exploded = true;
        }else if( safeNeighborhood( board, row, column ) ){
            /** Recursivamente abrirá os campos próximos, 
             *  caso esteja seguro 
             */
            getNeighbors( board, row, column )
                .forEach( n => openField( board, n.row, n.column ))
        }else{
            /** Caso não esteja seguro, sera calculado quantas
             *  minas próximas existem.
             */
            const neighbors = getNeighbors( board, row, column );
            /** O método filter seleciona os vizinhos minados e o 
             *  atributo length conta a quantidade  */
            field.nearMines = neighbors.filter( n => n.mined ).length;
        }
    }
};

const fields = board => [].concat( ...board );
const hadExplosion = board => fields(board)
    .filter( field => field.exploded ).length > 0;
const pendding = field => ( field.mined && !field.flagged )
    || ( !field.mined && !field.opened );
const wonGame = board => fields(board).filter(pendding).length === 0;
const showMines = board => fields(board).filter( field => field.mined )
    .forEach( field => field.opened = true );

const invertFlag = ( board, row, column ) => {
    const field = board[row][column];
    field.flagged = !field.flagged;
};

const flagUsed = board => fields(board)
    .filter( field => field.flagged).length;

export { 
    createMinedBoard, 
    cloneBoard,
    openField,
    wonGame,
    showMines,
    hadExplosion,
    invertFlag,
    flagUsed,
};