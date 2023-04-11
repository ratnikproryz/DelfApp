import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { GREEN } from '../constants/color';

export default function TestCard(props) {
    return (
        <TouchableOpacity style={styles.card} onPress={props.onPress}>
            <View style={[styles.circle, styles.center]}>
                <Text style={{ fontSize: 13 }}>--</Text>
                <Text style={{ fontSize: 13 }}>/200</Text>
            </View>
            <View style={{  justifyContent: 'center', }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000000' }}>DELF Test 2022 - Test 1</Text>
                <Text style={{ fontSize: 16 }}>200 questions</Text>
            </View>
            <TouchableOpacity style={{  }}>
                <Icon name='download' size={24} color={GREEN} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 15,
    },
    circle: {
        width: 75,
        height: 75,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: GREEN,
        backgroundColor: "#ffffff",
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})