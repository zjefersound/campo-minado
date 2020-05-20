import React from 'react';
import { View } from 'react-native';
import Field from './../Field';
import styles from './styles';

/** MineField é o tabuleiro
 *  É pré-requisito: 
 *  -Board. que será usado para buscar as configs dos campos
 *  
 *  Para extrair os dados será utilizado o método Map() 
 */
export default props => {
    /** 
     *  O primeiro map percorre as linhas e retorna as colunas,
     *  que também são Arrays.  
     */
    const rows = props.board.map(( row, r ) => {
        /** O segundo map percore as colunas e extrai os dados de cada
         *  campo, retornando um componente Field, com os valores gerados
         *  e uma key para identificá-lo e poder alterar os valores com
         *  maior precisão. 
         */
        const columns = row.map((field, c) => {
            return <Field { ...field } key = { c } 
                onOpen = { () => props.onOpenField( r, c ) } 
                onSelect = { e => props.onSelectField( r, c ) } />;
        } );
        /** Assim como o campo a linha também precisa de um key */
        return <View key = { r } style = { styles.container }>{ columns }</View>;
    });
    return <View>{ rows }</View>;
};
