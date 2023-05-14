import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BLACK, BLUE, GREEN } from '../constants/color';

export default function Question(props) {
    const [selectedAnswer, setSelectedAnswer] = useState(props.answers.get(props.question_id))
    const ansIndex = ['A', 'B', 'C', 'D', 'E', 'F']

    const selectHandler = (answer_id) => {
        props?.selectedAnswer(props.question_id, answer_id)
        setSelectedAnswer(answer_id)
    }
    const toggleColor = (selectedAnswer, currentAnswer, isCorrect) => {
        if (props.mode == 'Review') {
            if (selectedAnswer === currentAnswer && isCorrect) return GREEN;
            if (selectedAnswer === currentAnswer && !isCorrect) return BLUE;
            if (selectedAnswer != currentAnswer && isCorrect) return "#FF0000";
            if (!isCorrect) return BLACK;
        }
        return (selectedAnswer === currentAnswer) ? BLUE : BLACK
    }
    const toggleBGColor = (selectedAnswer, currentAnswer, isCorrect) => {
        if (props.mode == 'Review') {
            if (selectedAnswer === currentAnswer && isCorrect) return GREEN;
            if (selectedAnswer === currentAnswer && !isCorrect) return BLUE;
            if (selectedAnswer != currentAnswer && isCorrect) return "#FF0000";
            if (!isCorrect) return "#FFF";
        }
        return (selectedAnswer === currentAnswer) ? BLUE : "#FFF"
    }


    const answerRender = (answerIndex, answerContent, id, isCorrect) => (
        <TouchableOpacity key={id} style={styles.answer} onPress={() => selectHandler(id)}>
            <View style={[styles.circle, { backgroundColor: toggleBGColor(selectedAnswer, id, isCorrect) }]}>
                <Text style={{ fontWeight: 'bold', }}>{answerIndex}</Text>
            </View>
            <Text style={{ fontWeight: 'bold', color: toggleColor(selectedAnswer, id, isCorrect), paddingRight: 30 }}>{answerContent}</Text>
        </TouchableOpacity>
    )

    return (
        <View style={{ paddingBottom: 15 }}>
            <View style={styles.question} >
                <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 16 }} >{props.question}</Text>
            </View>
            {props?.options.map((item, index) => {
                return answerRender(ansIndex[index], item.content, item._id, item.isCorrect)
            })}
        </View >
    )
}

const styles = StyleSheet.create({
    question: {
        height: 40,
        backgroundColor: BLUE,
        justifyContent: 'center',
        paddingHorizontal: 20,
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