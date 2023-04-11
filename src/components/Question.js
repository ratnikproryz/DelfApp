import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BLACK, BLUE } from '../constants/color';

export default function Question() {
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const selectHandler = (answer) => {
        setSelectedAnswer(answer)
    }
    const toggleColor = (selectedAnswer, currentAnswer) => {
        return (selectedAnswer === currentAnswer) ? BLUE : BLACK
    }
    const toggleBGColor = (selectedAnswer, currentAnswer) => {
        return (selectedAnswer === currentAnswer) ? BLUE : "#FFF"
    }

    const answerRender = (answerIndex, answerContent) => (
        <TouchableOpacity style={styles.answer} onPress={() => selectHandler(answerIndex)}>
            <View style={[styles.circle, { backgroundColor: toggleBGColor(selectedAnswer, answerIndex) }]}>
                <Text style={{ fontWeight: 'bold', }}>{answerIndex}</Text>
            </View>
            <Text style={{ fontWeight: 'bold', color: toggleColor(selectedAnswer, answerIndex) }}>{answerContent}</Text>
        </TouchableOpacity>
    )

    return (
        <View style={{ paddingBottom: 15 }}>
            <View style={styles.question} >
                <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 16 }} >Qu’est-ce que Célia va fêter ?</Text>
            </View>
            {answerRender('A', 'Son diplome')}
            {answerRender('B', 'Son diplome')}
            {answerRender('C', 'Son diplome')}
        </View >
    )
}

const styles = StyleSheet.create({
    question: {
        height: 40,
        backgroundColor: BLUE,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    answer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingTop: 15,
    },
    circle: {
        borderRadius: 50,
        borderWidth: 1,
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    }
})