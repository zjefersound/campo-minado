import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Mine from './../Mine';

export default props => {
    const { mined, opened, nearMines } = props;

    // estilo padrão
    const styleField = [ styles.field ];
    // outros estilos:
    if ( opened ) styleField.push( styles.opened );
    if ( styleField.length === 1 ) styleField.push( styles.regular );

    /** Alterar a cor de acordo com a quantidade de minas proximas
     *  A cor indica a quantidade de perigo
     */
    let color = null;
    if ( nearMines > 0){
        if ( nearMines == 1 ) color = '#6764fa';
        if ( nearMines == 2 ) color = '#6cfa64';
        if ( nearMines > 2 && nearMines < 6 ) color = '#fa6467';
        if ( nearMines >= 6 ) color = '#fa64de';
    }

    return(
        <View style = { styleField }>
            { !mined && opened && nearMines > 0 ? 
            <Text style = {[ styles.label, { color: color } ]}>
                { nearMines }</Text> : false }
        </View>
    );

}