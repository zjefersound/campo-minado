import { StyleSheet } from 'react-native';
import params from './../../Params';

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#333',
        borderLeftColor: '#606060',
        borderTopColor: '#606060',
        borderRightColor: '#222',
        borderBottomColor: '#222',
    },
    opened: {
        backgroundColor: '#333',
        borderColor: '#222',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
    exploded: {
        backgroundColor: '#ed6553',
        borderColor: '#c23421'
    },

});

export default styles;