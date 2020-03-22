import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default function App() {
  const [goals, setGoals] = useState([])
  const [idCount, setIdCount] = useState(0)
  const [isAddMode, setIsAddMode] = useState(false)


  const addGoal = (newGoal) => {
    const addGoal = { id: incCount(), message: newGoal }
    setGoals(goals => [...goals, addGoal])
    toggleModal()
  }

  const incCount = () => {
    setIdCount(prev => prev + 1)
    return idCount
  }

  const onDelete = (id) => {
    setGoals(goals.filter(goal => goal.id !== id))
  }

  const toggleModal = () => {
    setIsAddMode(!isAddMode)
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Jerry's To Do List</Text>
      <Button title="Add To Do" onPress={toggleModal}/>
      <GoalInput addGoal={addGoal} visable={isAddMode} toggleModal={toggleModal}/>

      <View>
        <FlatList 
          data={goals} renderItem={item => (
            <GoalItem item={item.item} onDelete={onDelete} />)} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    margin: 30,
    fontSize: 20,
    fontWeight: "bold"
  },

  screen: {
    padding: 50
  },
  inputContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  input: { borderColor: 'black', borderWidth: 1, padding: 10, width: "80%" },
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10
  }

})