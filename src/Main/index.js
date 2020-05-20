import React, { Component } from 'react';
import { 
    View,
    Text,
    StatusBar,
    Alert,
} from 'react-native';

//configs do app
import styles from './styles';
import params from './../Params';

//componentes
import Header from './../components/Header';
import MineField from './../components/MineField';
import { 
    createMinedBoard, 
    cloneBoard,
    openField,
    wonGame,
    showMines,
    hadExplosion,
    invertFlag,
    flagUsed,
} from './../Logic';
import LevelSelection from './../screens/LevelSelection';

export default class Main extends Component {

    constructor( props ) {
        super( props );
        this.state = this.createState();
    }

    minesAmount = () => {
        const cols = params.getColumnsAmount();
        const rows = params.getRowsAmount();
        /** Dificuldade é um percentual em relação ao numero de campos */
        return Math.ceil( cols * rows * params.difficultLevel );
    };

    createState = () => {
        const cols = params.getColumnsAmount();
        const rows = params.getRowsAmount();
        return {
            board: createMinedBoard( rows, cols, this.minesAmount() ),
            won: false,
            lost: false,
            showLevelSelection: false
        };
    };

    opOpenField = ( row, column ) => {
        const board = cloneBoard( this.state.board );
        openField( board, row, column );
        const lost = hadExplosion(board);
        const won = wonGame(board);

        if( lost ){
            showMines(board);
            Alert.alert('Perdeeeeu!','Tente novamente!');
        }
        if( won ){
            Alert.alert('Parabéns!','Você ganhou!!!');
        }
        this.setState({
            board,
            lost,
            won,
        });
    }; 
    onSelectField = ( row, column ) => {
        const board = cloneBoard( this.state.board );
        invertFlag( board, row, column );
        const won = wonGame(board);
        if( won ){
            Alert.alert('Parabéns!','Você ganhou!!!');
        }
        this.setState({
            board,
            won,
        });
        
    };
    onLevelSelected = level => {
        params.difficultLevel = level;
        this.setState(this.createState());
    };

    render(){
        return(
            <View style = { styles.container }>
                <StatusBar backgroundColor = '#F90' barStyle="dark-content" />
                <LevelSelection isVisible = { this.state.showLevelSelection } 
                    onCancel = { () => this.setState({ showLevelSelection: false }) }
                    onLevelSelected = { this.onLevelSelected }/> 
                <Header flagsLeft = { this.minesAmount() - flagUsed(this.state.board) } 
                    onNewGame = { () => this.setState(this.createState()) }
                    onFlagPress = { () => this.setState({ showLevelSelection: true }) }/>
                <View style = { styles.board }>
                    <MineField board = { this.state.board }
                        onOpenField = { this.opOpenField }
                        onSelectField = { this.onSelectField } />
                </View>
            </View>
        );
    };
};