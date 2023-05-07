import React from 'react'
import { ScrollView, View } from 'react-native'
import Question from '../components/Question'

export default function Part1(props) {
    return (
        <ScrollView style={{ marginBottom: 50 }}>
            {props?.data.questions.map((item, index) => (
                <Question key={item._id} question_id={item._id} question={(index + 1) + ". " + item.question}
                    options={item.options} selectedAnswer={props?.selectedAnswer} answers={props.answers} mode={props.mode}/>
            ))}
        </ScrollView>
    )
}
