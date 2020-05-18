import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Mine from './../Mine';
import Flag from './../Flag';

export default props => {
    const { mined, opened, nearMines, exploded, flagged } = props;

    // estilo padrão
    const styleField = [ styles.field ];
    // outros estilos:
    if ( opened ) styleField.push( styles.opened );
    if ( exploded ) styleField.push( styles.exploded );
    if ( flagged ) styleField.push( styles.flagged );
    if ( !opened && !exploded ) styleField.push( styles.regular );

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
            { mined && opened ? <Mine /> : false }
            { flagged && !opened ? <Flag /> : false }
        </View>
    );

}