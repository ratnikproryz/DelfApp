import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BLACK, BLUE } from '../constants/color';
import { Checkbox } from 'react-native-paper';
export default function QuestionTF() {
    const [checkboxes, setCheckboxes] = useState([{
        id: 1,
        title: 'true-option',
        checked: false,
    }, {
        id: 2,
        title: 'false-option',
        checked: false,
    }]);
    const toggleCheckbox = (id, index) => {
        const checkboxData = [...checkboxes];
        checkboxData[index].checked = !checkboxData[index].checked;
        checkboxData.forEach((element, elementIndex) => {
            if (elementIndex != index) {
                element.checked = !checkboxData[index].checked
            }
        });
        setCheckboxes(checkboxData);
    }

    const checkboxesRender = () => (
        <View style={{ flexDirection: 'row', }}>
            {checkboxes.map((cb, index) => {
                return (
                    <Checkbox
                        key={cb.id}
                        status={cb.checked ? 'checked' : 'unchecked'}
                        onPress={() => toggleCheckbox(cb.id, index)}
                        color={BLUE}
                    />
                )
            })}
        </View>
    )
    return (
        <View style={styles.question}>
            <View style={styles.circle}>
                <Text style={{ fontWeight: 'bold', color: BLACK }}>1</Text>
            </View>
            <Text style={{ fontWeight: 'bold', color: BLACK, }}>Cuisine régionale</Text>
            <View style={styles.checkboxes}>
                {checkboxesRender()}
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
        position:'absolute',
        right: 0,
        paddingRight: 15,
    }
})