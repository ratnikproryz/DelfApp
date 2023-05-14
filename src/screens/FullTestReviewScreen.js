import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Footer from '../components/Footer'
import Part1 from '../components/Part1'
import Part2_1 from '../components/Part2_1'
import Part2_23 from '../components/Part2_23'
import Part3 from '../components/Part3'
import { useState } from 'react'
import { useEffect } from 'react'
import { getExercisesOfExam } from '../api/ExaminationAPI'
import Icon from 'react-native-vector-icons/FontAwesome';
import { BLACK } from '../constants/color'
import { getAnswersSubmitted } from '../api/ResultApi'

export default function FullTestReviewScreen({ navigation, route }) {
    const [index, setIndex] = useState(1)
    const [title, setTitle] = useState(['Listenng 1', 'Listenng 2', 'Listenng 3',
        'Reading 1', 'Reading 2', 'Reading 3', 'Writing']);
    const [data, setData] = useState()
    const [answers, setAnswers] = useState(new Map())
    const [mode, setMode] = useState('Review')

    useEffect(() => {
        getExercises()
        getAnswers()
    }, [])


    const getExercises = async () => {
        const response = await getExercisesOfExam(route.params.examID)
        setData(response.data)
    }
    const selectedAnswer = (question_id, answer_id) => {

    }

    const getAnswers = async () => {
        const response = await getAnswersSubmitted(route.params.resultID);
        const answersMap = new Map(response.data.data.map(item => [item.question, item.answer]))
        setAnswers(answersMap)
    }

    const render = (index) => {
        switch (index) {
            case 1:
                return <Part1 data={data.listening_1[0]} mode={mode} answers={answers} selectedAnswer={selectedAnswer} />
            case 2:
                return <Part1 data={data.listening_2[0]} mode={mode} answers={answers} selectedAnswer={selectedAnswer} />
            case 3:
                return <Part1 data={data.listening_3[0]} mode={mode} answers={answers} selectedAnswer={selectedAnswer} />
            case 4:
                return <Part2_1 data={data.reading_1[0]} mode={mode} answers={answers} selectedAnswer={selectedAnswer} />
            case 5:
                return <Part2_23 data={data.reading_2[0]} mode={mode} answers={answers} selectedAnswer={selectedAnswer} />
            case 6:
                return <Part2_23 data={data.reading_3[0]} mode={mode} answers={answers} selectedAnswer={selectedAnswer} />
            case 7:
                return <Part3 data={data.writing[0]} mode={mode} answers={answers} selectedAnswer={selectedAnswer} />
            default:
                setIndex(1)
                return <Part1 data={data.listening_1[0]} mode={mode} answers={answers} selectedAnswer={selectedAnswer} />
        }
    }

    return (
        <View style={styles.body}>
            <View style={styles.section}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <Icon name='chevron-left' size={24} color={BLACK} />
                </TouchableOpacity>
                <Text style={{ color: BLACK, fontSize: 24, paddingLeft: 30 }}>{title[index - 1]}</Text>
            </View>
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
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 5,
        height: 50,
        paddingHorizontal: 20,
    }
})