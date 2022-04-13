import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import store from "./src/Redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Layout } from "./src/Layout";
import {getTodosFromDb} from  './src/Redux/asyncActions'
import { useEffect } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyB_z7Ub9gqSsxXslx6VKhspHWkaxOka3u8",
    authDomain: "todo-mobile-app-2f2d9.firebaseapp.com",
    databaseURL: "https://todo-mobile-app-2f2d9-default-rtdb.firebaseio.com",
    projectId: "todo-mobile-app-2f2d9",
    storageBucket: "todo-mobile-app-2f2d9.appspot.com",
    messagingSenderId: "248250063550",
    appId: "1:248250063550:web:ba55b9a7be533964bfdcef",
    measurementId: "G-9G667ZPGCX"
  };
  const app = initializeApp(firebaseConfig);

  export function storeTodos(todos) {
    const db = getDatabase();
    const reference = ref(db, 'todos/');
    set(reference, {
      todos: todos,
    });
  }
  
export default function App() {
    return (
        <Provider store={store}>
           <LayoutWrapper/>
        </Provider>
    );

}



function LayoutWrapper() {
    const dispatch = useDispatch()
    let responsedTodos = dispatch(getTodosFromDb());
    
    
    return (
        <Layout />
    );

}