import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function GoalItem(props) {
    return (
        <TouchableOpacity onPress={()=>props.onDelete(props.item.id)}>
            <View style={styles.listItem} key={props.item.id} >
                <Text>{props.item.message}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    
    
    listItem: {
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
        marginVertical: 10
    }

})

export default GoalItem