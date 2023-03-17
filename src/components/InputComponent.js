import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function InputComponent(props) {
    return (
        <View style={styles.body}>
            <Icon name={props.icon} style={styles.icon} size={16} color="#7E7E7E" />
            <TextInput style={styles.input} placeholder={props.placeholder}
                onChangeText={text => props?.onChangeText(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        margin: 10,
        width: 200,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
    },
    icon: {
        marginLeft: 10,
    },
    input: {
        flex: 1,
        padding: 10,
    },

})