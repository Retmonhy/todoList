import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Alert,
    Button
} from "react-native";
import { EditModal } from "./EditModal";
import { Checkbox } from "./Checkbox";
import { useDispatch } from "react-redux";
import { removeTodo, setDone } from "../Redux/reducers/tasks";

export function TodoItem({ todo }) {
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch()


    return (
        <>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setModalVisible(!modalVisible)}
                // onLongPress={() => deleteConfirm(dispatch(removeTodo), todo.id)}
            >
                <View style={todo.isDone ? styles.wrapperDone : styles.wrapper}>
                    <View>
                        <Checkbox todo={todo} initialState={todo.isDone}  checkboxPressHandler={(newState) => dispatch(setDone(todo.id, newState))}/>
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.title}> {todo.title}</Text>
                        <View>
                            {todo.description ? (
                                <Text style={styles.description}>
                                    {todo.description}
                                </Text>
                            ) : (
                                <Text style={styles.addDecription}>
                                    Add description...
                                </Text>
                            )}
                        </View>
                    </View>
                    <View>
                        <Button color="#797ddf" onPress={() => dispatch(removeTodo(todo.id))} title="X"/>
                    </View>
                </View>
            </TouchableOpacity>
            {modalVisible && (
                <EditModal
                    todo={todo}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                />
            )}
        </>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 10,
        borderColor: "#797ddf",
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    wrapperDone: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderColor: 'green',
        borderWidth: 2,
        opacity: 0.5
    },
    textWrapper: {
      paddingHorizontal: 15  
    },
    title: {
        marginBottom: 10,
        fontSize: 18,
        fontWeight: "700",
        color: "#000",
    },
    description: {
        color: "#000",
    },
    addDecription: {
        color: "#ccc",
    },
});

function deleteConfirm(removeTodo, id) {
    Alert.alert(
        "Delete",
        "Are you sure to delete this todo?",
        [
            {
                text: "Cancel",
                onPress: () => null,
            },
            { text: "Yes", onPress: () => removeTodo(id) },
        ],
        {
            cancelable: true,
        }
    );
}
