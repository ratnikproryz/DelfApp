import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { GREEN } from '../constants/color';

export default function VocabularyScreen() {
  return (
    <View style={[styles.body]}>
      <View style={[styles.card, styles.center]}>
        <Image source={require('../assets/images/bonjour.png')} ></Image>
        <Text style={styles.word}>bonjour</Text>
        <Text style={styles.description}>Souhait de bonne journée (adressé en arrivant, en rencontrant).</Text>
        <TouchableHighlight style={styles.volume}>
          <Icon name='volume-up' size={20} color={'#fff'}></Icon>
        </TouchableHighlight>
      </View>
      <View style={styles.center}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '70%', paddingBottom: 20 }}>
          <TouchableHighlight >
            <Icon name='chevron-left' size={32} color={GREEN} ></Icon>
          </TouchableHighlight>
          <TouchableHighlight >
            <Icon name='chevron-right' size={32} color={GREEN}></Icon>
          </TouchableHighlight>
        </View>
        <TouchableOpacity style={[styles.playButton, styles.center]}>
          <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '700' }}>PLAY A VOCAB GAME</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  body: {
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'white',
    height: '100%',
  },
  progressBar: {

  },
  image: {

  },
  word: {
    fontWeight: 'bold',
    fontSize: 20,
    // transform: ''
  },
  description: {
    width: '70%',
    textAlign: 'center',
    paddingBottom: 10,
  },
  meaning: {

  },
  volume: {
    borderRadius: 50,
    backgroundColor: GREEN,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    borderRadius: 50,
    backgroundColor: GREEN,
    width: '70%',
    height: 40,
  },
  card: {
    height: '80%',
  }
});
