import React from 'react';
import { View } from 'react-native';
import styles from './styles';

export default props => {
    //Tamanhos da flag
    const stylesFlagpole = [ styles.flagpole, props.bigger ? styles.flagpoleBigger : null ];
    const stylesFlag = [ styles.flag , props.bigger ? styles.flagBigger : null ];
    const stylesBase1 = [ styles.base1 , props.bigger ? styles.base1Bigger : null ];
    const stylesBase2 = [ styles.base2 , props.bigger ? styles.base2Bigger : null ];
    
    return(
        <View style = { styles.container }>
            <View style = { stylesFlagpole  } />
            <View style = { stylesFlag } />
            <View style = { stylesBase1 } />
            <View style = { stylesBase2 } />
        </View>
    );
};