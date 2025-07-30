import { Pressable, StyleSheet, Text } from 'react-native';

function GoalItem({text, onDeleteGoal}) {
    function handlePress() {
        onDeleteGoal();
    }

    return (
        <Pressable
            android_ripple={{color: '#1B0736FF'}}
            onPress={handlePress}
            style={({pressed}) => pressed && styles.pressedItem}
        >
            <Text 
                style={styles.goal}
            >
                {text}
            </Text>
        </Pressable>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goal: {
        fontWeight: 400,
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#3E0ACCFF',
        padding: 12,
        color: '#EEBEEAFF'
    },
    pressedItem: {
        opacity: 0.5
    }
})