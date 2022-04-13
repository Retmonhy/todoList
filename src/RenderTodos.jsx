import React from 'react'
import { FlatList, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';
import {TodoItem} from './todos/TodoItem'


export function RenderTodos({ data }) {
	return(
	<FlatList
		style={styles.container}
		data={data}
		renderItem={({item}) => (<TodoItem
			todo={item}
			keyExtractor={item.id}
		/>)}
	/> 
	)
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
    },
});
