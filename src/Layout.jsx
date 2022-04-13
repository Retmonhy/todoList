import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { AddTodo } from "./AddTodo";
import { Checkbox } from "./todos/Checkbox";
import { RenderTodos } from "./RenderTodos";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import {storeTodos} from '../App'
import { loadTodosFromDB } from "./Redux/reducers/tasks";
import store from "./Redux/store";

const firebaseConfig = {
    apiKey: "AIzaSyB_z7Ub9gqSsxXslx6VKhspHWkaxOka3u8",
    authDomain: "todo-mobile-app-2f2d9.firebaseapp.com",
    databaseURL: "https://todo-mobile-app-2f2d9-default-rtdb.firebaseio.com",
    projectId: "todo-mobile-app-2f2d9",
    storageBucket: "todo-mobile-app-2f2d9.appspot.com",
    messagingSenderId: "248250063550",
    appId: "1:248250063550:web:ba55b9a7be533964bfdcef",
    measurementId: "G-9G667ZPGCX",
};
const app = initializeApp(firebaseConfig);

export const Layout = () => {
    const [justImportant, setJustImportant] = useState(false);    
    const todos = useSelector(store => store.tasks.todos)
     console.log(todos)
    if (todos.length > 0) storeTodos(todos)
    store.subscribe(() => {if(todos !== null) storeTodos(todos)})
    
    return (
        <>
            <Navbar />
            <AddTodo />
            <View style={styles.justImportant}>
                <Checkbox
                    initialState={justImportant}
                    checkboxPressHandler={setJustImportant}
                />
                <Text>Show just important</Text>
            </View>
            {todos.length > 0 ? (
                justImportant ? (
                    todos.filter((item) => item.isImportant).length > 0 ? (
                        <RenderTodos
                        data={todos.filter((item) => item.isImportant)}
                        />
                    ) : (
                        <Text style={styles.emptyMessage}>
                            Your todolist haven`t important todo`s
                        </Text>
                    )
                ) : (
                    <RenderTodos data={todos} />
                )
            ) : (
                <Text style={styles.emptyMessage}>
                    Your TodoList is an empty!
                </Text>
            )}
        </>
    );
};


const styles = StyleSheet.create({
    emptyMessage: {
        textAlign: "center",
    },
    justImportant: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 15,
    },
});
