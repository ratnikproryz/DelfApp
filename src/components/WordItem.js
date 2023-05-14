import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { BLACK, GREEN } from '../constants/color'
import { removeFavorite, saveFavorite } from '../api/FavoriteAPI';

export default function WordItem(props) {
    const [isFavorite, setFavorite] = useState(true)
    const [id, setID] = useState(props.item._id)
    const toggleFavorHandler = async () => {
        if (!isFavorite) {
            const response = await saveFavorite(params.word, params.wordType, params.meaning)
            setID(response.data.data._id)
        } else {
            await removeFavorite(id)
            setID(null)
        }
        setFavorite(!isFavorite)
    }

    return (
        isFavorite &&<TouchableOpacity style={styles.item} onPress={() => props.onPress(props.item)}>
            <TouchableOpacity style={styles.volume}>
                <Icon name='volume-up' size={20} color={'#fff'} />
            </TouchableOpacity>
            <View style={styles.content}>
                <View style={styles.wordPronoun}>
                    <Text style={styles.word}>{props.item.word}</Text>
                    <Text>[{props.item.type}]</Text>
                </View>
                <Text>{props.item.meaning}</Text>
            </View>
            <TouchableOpacity style={{ position: 'absolute', right: 0 }} onPress={toggleFavorHandler}>
                {isFavorite && <Icon name='heart' size={20} color={'red'} />}
                {!isFavorite && <Icon name='heart-o' size={20} color={'#000000'} />}
            </TouchableOpacity>
        </TouchableOpacity>
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
