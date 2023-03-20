import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import WordItem from '../components/WordItem';
import { BLACK, GREEN } from '../constants/color'

export default function FavoriteScreen() {
  return (
    <ScrollView style={styles.body}>
      <WordItem/>
      <WordItem/>
      <WordItem/>
      <WordItem/>
      <WordItem/>
      <WordItem/>
      <WordItem/>
      <WordItem/>
      <WordItem/>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  body: {
    paddingLeft: 30,
    paddingTop: 30,
    paddingRight: 30,
    backgroundColor: 'white',
  },
})