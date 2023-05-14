import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import Paragraph from './Paragraph'
import Question from './Question'
export default function Part2_23(props) {
    return (
        <ScrollView style={{ marginBottom: 50 }}>
            <Paragraph paragraph={props.data.paragraph} />
            {props?.data.questions.map((item, index) => (
                <Question key={item._id} question_id={item._id} question={(index + 1) + ". " + item.question}
                    options={item.options} selectedAnswer={props?.selectedAnswer} answers={props.answers} mode={props.mode} />
            ))}
        </ScrollView>
    )
}
