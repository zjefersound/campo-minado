import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30,
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
        color: '#F90',
    },
    button: {
        backgroundColor: "#111",
        padding: 20,
        borderRadius: 8,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#F90',
        fontWeight: 'bold'
    }
});

export default styles;