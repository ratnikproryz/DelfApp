import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Paragrahp from './Paragrahp'
import QuestionTF from './QuestionTF'
import { BLUE } from '../constants/color'
export default function Part2_1() {
    return (
        <View >
            <Paragrahp />
            <View style={styles.bar}>
                <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 16 }}>OUI/NON</Text>
            </View>
            <QuestionTF />
            <QuestionTF />
            <QuestionTF />
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        height: 40,
        backgroundColor: BLUE,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
    },
})