import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { BLACK, GREEN } from '../constants/color'

export default function WordItem() {
    return (
        <View style={styles.item}>
            <TouchableHighlight style={styles.volume}>
                <Icon name='volume-up' size={20} color={'#fff'}></Icon>
            </TouchableHighlight>
            <View style={styles.content}>
                <View style={styles.wordPronoun}>
                    <Text style={styles.word}>Garcon</Text>
                    <Text>/ɡaʀsɔ̃/</Text>
                </View>
                <Text>Con trai (n.m)</Text>
            </View>
            <TouchableHighlight style={{ position: 'absolute', right: 0 }}>
                <Icon name='heart' size={20} color={'red'}></Icon>
            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 15,
    },
    volume: {
        borderRadius: 50,
        backgroundColor: GREEN,
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
    },
    wordPronoun: {
        flexDirection: 'row',
    },
    word: {
        color: BLACK,
        fontWeight: '700',
        paddingRight: 10,
    },
})
