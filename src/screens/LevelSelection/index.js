import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Modal,
} from 'react-native';
import styles from './styles';

export const ButtonLevel = props => {
    return (
        <TouchableOpacity 
            style = { [ styles.button, props.background ] }
            onPress = { () => props.callback( props.level ) }>
            <Text style = { styles.buttonLabel }>{ props.label }</Text>
        </TouchableOpacity>
    );
};

export default props => {
    return (
        <Modal onRequestClose = { props.onCancel }
            visible = { props.isVisible } 
            animationType = 'slide'
            transparent = { true }> 
            <View style = { styles.frame }>
                <View style = { styles.container }>
                    <Text style = { styles.title }> Selecione o nível: </Text>
                    <ButtonLevel level = { 0.1 }
                        callback = { props.onLevelSelected }
                        label = "Fácil" 
                        background = { styles.bgEasy } />
                    <ButtonLevel level = { 0.2 }
                        callback = { props.onLevelSelected }
                        label = "Normal" 
                        background = { styles.bgNormal } />
                    <ButtonLevel 
                        level = { 0.3 }
                        callback = { props.onLevelSelected }
                        label = "Difícil" 
                        background = { styles.bgHard } />
                    
                </View>
            </View>
        </Modal>
    );
};