import React, { Component } from 'react';
import { 
    View,
    Text,
    StatusBar,
} from 'react-native';

//configs do app
import styles from './styles';
import params from './../Params';

//componentes
import Field from './../components/Field';

export default class Main extends Component {
    render(){
        return(
            <View style = { styles.container }>
                <StatusBar backgroundColor = '#FFFF00' barStyle="dark-content" />
                <Text style = { styles.title }>Inicio Campo minado</Text>
                <Text style = { styles.title }>
                    Tamanho da grade: { params.getRowsAmount() }x{ params.getColumnsAmount() }
                </Text>
                <Field />
                <Field opened />
                <Field opened nearMines = {0}/>
                <Field opened nearMines = {1}/>
                <Field opened nearMines = {2}/>
                <Field opened nearMines = {3}/>
                <Field opened nearMines = {4}/>
                <Field opened nearMines = {5}/>
                <Field opened nearMines = {6}/>
                <Field opened mined/>
                <Field opened mined exploded/>
                <Field flagged />
                <Field flagged opened />
            </View>
        );
    }
}
