import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Navbar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>TodoList</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
    container:{
        backgroundColor: '#797ddf',
        padding: 20,
    }
})