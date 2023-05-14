import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BLACK, BLUE, GREEN } from '../constants/color';
import { Checkbox } from 'react-native-paper';
export default function QuestionTF(props) {
    const [selectedAnswer, setSelectedAnswer] = useState(props.answers.get(props.question_id))

    const selectHandler = (answer_id) => {
        props.selectedAnswer(props.question_id, answer_id)
        setSelectedAnswer(answer_id)
    }
    const toggleCheckbox = (selectedAnswer, currentAnswer) => {
        return (selectedAnswer === currentAnswer) ? 'checked' : 'unchecked'
    }

    const getColor = (selectedAnswer, currentAnswer, isCorrect) => {
        if (props.mode == "Review") {
            if (selectedAnswer === currentAnswer && isCorrect) return GREEN
            if (selectedAnswer === currentAnswer && !isCorrect) return "#FF0000"
        }
        return BLUE;
    }


    return (
        <View style={styles.question}>
            <View style={styles.circle}>
                <Text style={{ fontWeight: 'bold', color: BLACK }}>{props.index}</Text>
            </View>
            <Text style={{ fontWeight: 'bold', color: BLACK, }}>{props.question}</Text>
            <View style={styles.checkboxes}>
                <View style={{ flexDirection: 'row', }}>

                    {props.options.map((item) => (
                        <Checkbox
                            key={item._id}
                            status={toggleCheckbox(selectedAnswer, item._id)}
                            onPress={() => selectHandler(item._id)}
                            color={getColor(selectedAnswer, item._id, item.isCorrect)}
                        />
                    ))}
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    question: {
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
    },
    checkboxes: {
        position: 'absolute',
        right: 0,
        paddingRight: 15,
    }
})