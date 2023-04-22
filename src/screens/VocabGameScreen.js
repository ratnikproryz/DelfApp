import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { BLUE, GREEN } from '../constants/color';
import { getRandomWord } from '../api/FavoriteAPI';
import { ALERT_TYPE, AlertNotificationRoot, Dialog } from 'react-native-alert-notification';

export default function VocabGameScreen() {
    const [timeCounter, setTimeCounter] = useState(30)
    const [heart, setHeart] = useState(3)
    const [currentWord, setCurrentWord] = useState(null)
    const [currentMean, setCurrentMean] = useState(null)
    const [timerID, setTimerID] = useState(null)
    const [words, setWords] = useState([])
    const [meanings, setMeanings] = useState([])

    useEffect(() => {
        getWordsList()
        counterHandler()
    }, [])
    useEffect(()=>{
        if (words.length === 1 || meanings.length === 1 && timeCounter > 0) {
            clearInterval(timerID)
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Sucessfully',
                textBody: 'Congratulations! You won the game',
                button: 'OK',
            })
        }
        if(timeCounter === 0 || heart === 0){
            clearInterval(timerID)
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: 'Game Over!!!',
                textBody: 'Try again!',
                button: 'OK',
            })
        }
    }, [timeCounter, heart])

    const onRePlay = () => {
        clearInterval(timerID)
        getWordsList()
        setTimeCounter(30)
        setHeart(3)
        counterHandler()
    }
    const getWordsList = async () => {
        const response = await getRandomWord();
        setWords(response.data.data.words)
        setMeanings(response.data.data.meanings)
    }

    const counterHandler = () => {
        let timer = setInterval(() => {
            setTimeCounter(timeCounter => {
                if (timeCounter > 0) {
                    const newtimeCounter = timeCounter - 1;
                    return newtimeCounter;
                }
                clearInterval(timerID)
                return 0;
            })
        }, 1000)
        setTimerID(timer)
    }

    const cardRender = (key, value, onMatch) => {
        const toggleBGColor = (key, value) => {
            if (key.includes('word')) {
                return (currentWord === key) ? "#F64E83" : "#607d8b"
            } else {
                return (currentMean === key) ? "#F64E83" : "#607d8b"
            }
        }
        return (
            <TouchableOpacity
                key={key}
                onPress={() => onMatch(key, value)}
                style={[styles.card, styles.center, { backgroundColor: toggleBGColor(key, value) }]}>
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', paddingHorizontal: 10 }}>{value?.meaning ? value.meaning : value}</Text>
            </TouchableOpacity>
        )
    }
    const onMatch = (key, value) => {
        if (key.includes('word')) {
            setCurrentWord(key)
            let index = currentMean?.replace(/mean_/g, '')
            if (value === meanings[index]?.word) {
                setMeanings(meanings.filter(item => item !== meanings[index]))
                setWords(words.filter(item => item != value))
            } else {
                setHeart(heart => heart - 1)
            }
        } else {
            setCurrentMean(key)
            let index = currentWord?.replace(/word_/g, '')
            if (value.word === words[index]) {
                setMeanings(meanings.filter(item => item.word !== words[index]))
                setWords(words.filter(item => item != words[index]))
            } else {
                setHeart(heart => heart - 1)
            }
        }
    }

    return (
        <AlertNotificationRoot>
            <View style={styles.body}>
                <View style={{ flexDirection: 'row', paddingVertical: 15, justifyContent: 'space-between', }}>
                    <View style={[styles.circle, styles.center]}>
                        <Text style={{ fontSize: 20, color: "#000000" }}>{timeCounter}</Text>
                    </View>
                    <View style={styles.alive}>
                        <Icon name='heart' color="red" size={32} />
                        <Text style={{ fontSize: 24, color: "#000000" }}>{heart}</Text>
                    </View>
                    <TouchableOpacity style={styles.center} onPress={onRePlay}>
                        <Icon name='rotate-left' color={GREEN} size={32} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.bar, styles.center]}>
                    <Text style={{ fontSize: 20, color: "#000000" }}>Match words to their meanings!</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 15 }}>
                    <View style={{ flexDirection: 'column', rowGap: 15 }} >
                        {words.map((item, index) => (
                            cardRender(`word_${index}`, item, onMatch)
                        ))}
                    </View>
                    <View style={{ flexDirection: 'column', rowGap: 15 }} >
                        {meanings.map((item, index) => (
                            cardRender(`mean_${index}`, item, onMatch)
                        ))}
                    </View>
                </View>
            </View >

        </AlertNotificationRoot>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 30,
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: GREEN,
        backgroundColor: "#ffffff",
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    alive: {
        flexDirection: 'row',
        width: 75,
        borderWidth: 2,
        borderColor: BLUE,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    card: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        marginVertical: 10,
    },
    bar: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: BLUE,
        borderRadius: 5,
        height: 50,
    }
})