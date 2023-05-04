import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Paragrahp from './Paragraph'
import QuestionTF from './QuestionTF'
import { BLUE } from '../constants/color'
export default function Part2_1(props) {
    return (
        <View >
            <Paragrahp paragraph={props.data.paragraph} />
            <View style={styles.bar}>
                <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 16 }}>OUI/NON</Text>
            </View>
            {props?.data.questions.map((item, index) => (
                <QuestionTF key={item._id} question_id={item._id} index={index + 1} question={item.question}
                    options={item.options} selectedAnswer={props.selectedAnswer} answers={props.answers} />
            ))}
            {/* <QuestionTF />
            <QuestionTF />
            <QuestionTF /> */}
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