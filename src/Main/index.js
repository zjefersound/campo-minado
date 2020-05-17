import React, { Component } from 'react';
import { 
    View,
    Text,
    StatusBar,
} from 'react-native';

import styles from './styles';
import params from './../Params';

export default class Main extends Component {
    render(){
        return(
            <View style = { styles.container }>
                <StatusBar backgroundColor = '#FFFF00' barStyle="dark-content" />
                <Text>Inicio Campo minado</Text>
            </View>
        );
    }
}
