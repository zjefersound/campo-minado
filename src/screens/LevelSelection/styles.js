import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0009'
    },  
    container: { 
        backgroundColor: '#F90',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',

    },  
    button: {
        width: 170,
        marginTop: 10,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonLabel: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#094'
    },
    bgNormal: {
        backgroundColor: '#08B'
    },
    bgHard: {
        backgroundColor: '#F04'
    },
});

export default styles;