import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Text, Modal } from 'react-native'

function GoalInput(props) {

    const { addGoal, visable, toggleModal } = props

    const [enteredGoal, setEnteredGoal] = useState('')
    const handleGoalInput = (text) => { setEnteredGoal(text) }

    return (
        <Modal visible={visable} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="new item" style={styles.input} onChangeText={handleGoalInput} value={enteredGoal} />
                <View style={styles.button}>
                    <Button title="ADD" onPress={() => {
                        setEnteredGoal("")
                        addGoal(enteredGoal)
                    }
                    } />
                    <Button title="CANCEL" color="red" onPress={toggleModal} />
                </View>

            </View>
        </Modal>

    )
}


const styles = StyleSheet.create({


    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: "80%",
        marginBottom: 10
    },

    button: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: "40%"
    }
})




export default GoalInput