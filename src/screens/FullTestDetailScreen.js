import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Part1 from '../components/Part1'
import Part2_1 from '../components/Part2_1'
import Part2_23 from '../components/Part2_23'
import Part3 from '../components/Part3'
import { useState } from 'react'
import { useEffect } from 'react'
import { getExercisesOfExam } from '../api/ExaminationAPI'
import { submitAnswers } from '../api/ResultApi'

export default function FullTestDetailScreen({ navigation, route }) {
    const [index, setIndex] = useState(1)
    const [title, setTitle] = useState(['Listenng 1', 'Listenng 2', 'Listenng 3',
        'Reading 1', 'Reading 2', 'Reading 3', 'Writing']);
    const [data, setData] = useState()
    const [answers, setAnswers] = useState(new Map())
    const [resultID, setResultID] = useState(route.params.result_id)

    useEffect(() => {
        // getExercises()
        console.log("resultID: " + resultID);
    }, [])
    const getExercises = async () => {
        const response = await getExercisesOfExam(route.params.exam._id)
        setData(response.data)
    }
    const selectedAnswer = (question_id, answer_id) => {
        setAnswers(answers.set(question_id, answer_id))
        console.log(answers)
    }

    const submit = () => {
        console.log("resultID: " + resultID);
        submitAnswers(answers, resultID)
        console.log('submit');
    }
    const render = (index) => {
        switch (index) {
            case 1:
                return <Part1 data={data.listening_1[0]} answers={answers} selectedAnswer={selectedAnswer} />
            case 2:
                return <Part1 data={data.listening_2[0]} answers={answers} selectedAnswer={selectedAnswer} />
            case 3:
                return <Part1 data={data.listening_3[0]} answers={answers} selectedAnswer={selectedAnswer} />
            case 4:
                return <Part2_1 data={data.reading_1[0]} answers={answers} selectedAnswer={selectedAnswer} />
            case 5:
                return <Part2_23 data={data.reading_2[0]} answers={answers} selectedAnswer={selectedAnswer} />
            case 6:
                return <Part2_23 data={data.reading_3[0]} answers={answers} selectedAnswer={selectedAnswer} />
            case 7:
                return <Part3 data={data.writing[0]} answers={answers} selectedAnswer={selectedAnswer} />
            default:
                setIndex(1)
                return <Part1 data={data.listening_1[0]} answers={answers} selectedAnswer={selectedAnswer} />
        }
    }

    return (
        <View style={styles.body}>
            <Header title={title[index - 1]} navigation={navigation} submit={submit} timeLimit={route.params.exam.timeLimit} />
            {data ? render(index) : null}
            <Footer onNext={() => setIndex(index => index + 1)} onBack={() => setIndex(index => index - 1)} />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#ffffff",
    },

})