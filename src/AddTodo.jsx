import React, { useState } from "react";
import { Button, StyleSheet, View, TextInput, Alert} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./Redux/reducers/tasks";

export const AddTodo = ({}) => {
const [inputValue, setInputValue] = useState('');
const dispatch = useDispatch()

const pressHandler = () => {
    if(inputValue.trim() !== '') {
    dispatch(addTodo(inputValue))
    setInputValue('')
    } else Alert.alert('Error', 'Todo`s title can`t be empty!')
}

    return (
        <View>
            <View style={styles.flexRow}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter a title for todo!"
                    value={inputValue}
                    onChangeText={setInputValue}
                    autoCorrect={false}
                />
                <Button
                    style={styles.addBtn}
                    color='#797ddf'
                    onPress={pressHandler}
                    title="Add todo"
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    flexRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        padding: 15,
    },
    addBtn: {
        width: "30%",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    input: {
        borderColor: "#797ddf",
        borderBottomWidth: 2,
        width: "70%",
        height: 40,
        padding: 10,
    },
});