import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

export const Checkbox = ({initialState, checkboxPressHandler}) => {
    const [isChecked, setChecking] = useState(initialState)
    return(
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => {setChecking(!isChecked); checkboxPressHandler(!isChecked);}}
        >
            <View style={isChecked ? styles.checkboxChecked :  styles.checkboxDefault}></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkboxDefault: {
        width: 30,
        height: 30,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#797ddf',
        borderRadius: 50

    },
    checkboxChecked: {
        width: 30,
        height: 30,
        backgroundColor: 'green',
        borderRadius: 50,
    }
})