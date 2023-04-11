import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import Paragrahp from './Paragrahp'
import { BLUE } from '../constants/color'

export default function Part3() {
    return (
        <View >
            <Paragrahp />
            <View style={{ paddingHorizontal: 20, }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#000" }}>Answer:</Text>
                <TextInput style={styles.input} multiline placeholder='Write your answer here!' />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        // margin: 12,
        fontSize: 16,
    }
})