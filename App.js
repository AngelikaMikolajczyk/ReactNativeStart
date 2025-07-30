import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import * as SystemUI from 'expo-system-ui'; 
import { StatusBar } from 'expo-status-bar';

SystemUI.setBackgroundColorAsync("#0E0D46FF");

export default function App() {
  const [goals, setGoals] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  function addGoal(newGoalText) {
    setGoals((currentGoals) => {
      return [...currentGoals, {text: newGoalText, id: Math.random().toString()}];
    })
  };

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter(goal => goal.id !== id);
    })
  }

  function startAddGoalHandler() {
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler}/>
        <GoalInput addGoal={addGoal} openModal={openModal} closeModal={closeModal}/>
        <View style={styles.goalsContainer}>
          <FlatList 
            data={goals} 
            renderItem={(goalData) => {
              return (
                <GoalItem text={goalData.item.text} onDeleteGoal={() => deleteGoalHandler(goalData.item.id)}/>
              )
            }}
            keyExtractor={(item) => item.id}
          >
          </FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
  },
  goalsContainer: { 
    flex: 5,
  }
});
