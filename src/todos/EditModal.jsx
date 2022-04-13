import React, { useState } from "react";
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TextInput,
    Button,
    Alert,
} from "react-native";
import { Checkbox } from "./Checkbox";
import { editTodo } from "../Redux/reducers/tasks";
import { useDispatch } from "react-redux";

export const EditModal = ({ todo, modalVisible, setModalVisible }) => {
    const dispatch = useDispatch()

    const [titleValue, setTitleValue] = useState(todo.title);
    const [descriptionValue, setDescriptionValue] = useState(todo.description);
    const [important, setImportant] = useState(todo.isImportant);

    const doEditTodo = () => {
        dispatch(editTodo(todo.id, titleValue, descriptionValue, important))
        setModalVisible(!modalVisible);
    };

    const editValidation = () => {
        if (titleValue.trim() === "") {
            Alert.alert("Error", "Todo`s title can`t be empty!");
        } else {
            doEditTodo();
        }
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                modalVisible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalHeader}>Edit Todo</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter a title for todo!"
                            value={titleValue}
                            onChangeText={setTitleValue}
                            autoCorrect={false}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter a description for todo!"
                            value={descriptionValue}
                            onChangeText={setDescriptionValue}
                            autoCorrect={false}
                        />
                        <View style={styles.important}>
                            <Checkbox todo={todo} initialState={important} checkboxPressHandler={() => setImportant(!important)}/>
                            <Text>Flag as important!</Text>
                        </View>
                        <View style={styles.buttonsWrapper}>
                            <Button
                                onPress={editValidation}
                                color="#797ddf"
                                title="Edit"
                            />
                            <Button
                                onPress={() => setModalVisible(!modalVisible)}
                                color="#797ddf"
                                title="Cancel"
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 22,
    },
    modalView: {
        width: "90%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalHeader: {
        fontWeight: "700",
        fontSize: 20,
    },
    input: {
        borderColor: "#797ddf",
        borderBottomWidth: 2,
        width: "100%",
        height: 40,
        padding: 10,
    },
    buttonsWrapper: {
        width: "100%",
        marginTop: 20,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    important: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop: 20
    }
});
