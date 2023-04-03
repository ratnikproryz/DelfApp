import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import WordItem from '../components/WordItem';
import { getFavorites } from '../api/FavoriteAPI';
import { useIsFocused } from "@react-navigation/native";

export default function FavoriteScreen({ navigation }) {
  const isFocused = useIsFocused();
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    getFavoritesList()
  }, [isFocused])

  const getFavoritesList = async () => {
    const response = await getFavorites()
    setFavorites(response.data.data)
  }

  const navigatehandler = (item) => {
    navigation.navigate('Word', {
      'word': item.word,
      'wordType': item.type,
      'meaning': item.meaning,
      'isFavorite': favorites
    })
  }

  return (
    <ScrollView style={styles.body}>
      {favorites.map((item) => (
        <WordItem key={item._id} item={item} onPress={navigatehandler} />
      ))}
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  body: {
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'white',
  },
})