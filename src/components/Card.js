import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default function Card(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress} >
            <LinearGradient
                style={[styles.body, styles.shadowProp]}
                colors={[props.firstColor, props.secondColor]}
                start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
            >
                <Image source={require(`../assets/icons/mini-test.png`)} ></Image>
                <Text>{props.title}</Text>
            </LinearGradient >
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        justifyContent: 'center',
        paddingRight: 10,

    },
    body: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,

    },
    image: {
        width: 32,
        height: 32,
    },
    shadowProp: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5
    },
})