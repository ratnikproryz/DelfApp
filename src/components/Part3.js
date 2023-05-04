import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import Paragrahp from './Paragraph'
import { BLUE } from '../constants/color'

export default function Part3(props) {
    return (
        <View >
            <Paragrahp paragraph={props.data.description} />
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