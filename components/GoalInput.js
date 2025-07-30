import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';
import { useState } from 'react';

function GoalInput({addGoal, openModal, closeModal}) {
    const [newGoalText, setNewGoalText] = useState('');

    function handleGoalInput(enteredText) {
        setNewGoalText(enteredText);
    };

    function onAddGoalHandler() {
        addGoal(newGoalText);
        setNewGoalText('');
        closeModal();
    }

    return (
        <Modal visible={openModal} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image}/>
                <TextInput 
                    placeholder='Your course goal!' 
                    style={styles.textInput} 
                    onChangeText={handleGoalInput}
                    value={newGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={onAddGoalHandler} color='#8F2BC9FF'/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={closeModal} color='#BB134BFF'/>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#D0AFDFFF',
        backgroundColor: '#D0AFDFFF',
        color: '#29062BFF',
        width: '100%',
        padding: 12,
        borderRadius: 6
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})