import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BLACK, BLUE } from '../constants/color';
import { useState } from 'react';

export default function Header(props) {
    const [minutes, setMinutes] = useState(props.timeLimit)
    const [timerID, setTimerID] = useState(null)
    const [timeCounter, setTimeCounter] = useState(minutes * 60)

    useEffect(() => {
        counterHandler()
    }, [])

    const goBack = () => {
        props.navigation.goBack();
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

    return (
        <View style={styles.section}>
            <TouchableOpacity style={{}} onPress={goBack}>
                <Icon name='chevron-left' size={24} color={BLACK} />
            </TouchableOpacity>
            <Text style={{ color: BLACK, fontSize: 24 }}>{props.title}</Text>
            <Text style={{ color: BLUE, fontSize: 16 }}>
                {`${(Math.floor(timeCounter / 60)).toString().padStart(2, '0')}:${(timeCounter % 60).toString().padStart(2, '0')}`}
            </Text>
            <TouchableOpacity onPress={() => props.submit()}>
                <Text style={{ color: BLUE, fontSize: 18 }}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 5,
        height: 50,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    }
})