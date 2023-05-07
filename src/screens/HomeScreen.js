import React, { useEffect } from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { getDicExamples, lookUp } from '../api/TransAPI';
import Card from '../components/Card';
import SearchComponet from '../components/SearchComponet';
import { GREY } from '../constants/color';
import { AlertNotificationRoot, Toast, ALERT_TYPE } from 'react-native-alert-notification';
import { useSelector } from 'react-redux';


export default function HomeScreen({ navigation }) {
  const isAuth = useSelector(state => state.auth.isAuth);
  const [word, setWord] = useState('')
  useEffect(() => {
    if (!isAuth) {
      navigation.navigate('Login')
    }
  })
  const search = async () => {
    try {
      if (!word) return;
      console.log(word);
      const response = await lookUp(word)
      let meaning = response.translations.reduce((result, current) => result + ", " + current.normalizedTarget, "")
      meaning = meaning.substring(2, meaning.length); // remove ", "
      navigation.navigate('Word', {
        'word': response.normalizedSource,
        'wordType': response.translations[0].posTag,
        'meaning': meaning,
      })
    } catch (error) {
      console.log(error);
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: `Can't look up ${word} in dictionary!`,
      })
    }
  }

  const fullTestClickHandler = () => {
    navigation.navigate('ListTest', { type: "Full Test" })
  }
  const miniTestClickHandler = () => {
    navigation.navigate('ListTest', { type: "Mini Test" })
  }
  return (
    <AlertNotificationRoot theme='light' colors={[{ 'card': '#F0F0F0', }, { 'card': '#000', 'label': '#fff' }]}>
      <ScrollView style={style.body}>
        <View style={style.container}>
          {/* <Text style={style.title}>Delf Practice</Text>
            <Text style={style.description}>Parlez-vous français? Practice anytime, anywhere with our app!</Text> */}
          <SearchComponet icon='search' placeholder="Search Vocabulary" onChangeText={setWord} onPress={search} />
          <View style={style.section}>
            <Text style={style.sectionTitle}>DELF Practice</Text>
            <View style={style.sectionBody}>
              <Card title="Mini Test" image='mini-test.png' firstColor='#8EFFE2' secondColor='#E3FFF8' onPress={miniTestClickHandler} />
              <Card title="Full Test" image='mini-test.png' firstColor='#A4FDCC' secondColor='#E9FDF2' onPress={fullTestClickHandler} />
            </View>
          </View>
          <View style={style.section}>
            <Text style={style.sectionTitle}>Practice Listening</Text>
            <View style={style.sectionBody}>
              <Card title="Part 1" image='mini-test.png' firstColor='#F95A8F' secondColor='#FBCFDE' />
              <Card title="Part 2" image='mini-test.png' firstColor='#EB9EFC' secondColor='#F7D3FF' />
              <Card title="Part 3" image='mini-test.png' firstColor='#B6A0FF' secondColor='#EAE4FE' />
            </View>
          </View>
          <View style={style.section}>
            <Text style={style.sectionTitle}>Practice Reading</Text>
            <View style={style.sectionBody}>
              <Card title="Part 1" image='mini-test.png' firstColor='#81C0F2' secondColor='#97DDF3' />
              <Card title="Part 2" image='mini-test.png' firstColor='#F64E83' secondColor='#F5A2BC' />
              <Card title="Part 3" image='mini-test.png' firstColor='#C378F2' secondColor='#FE90F7' />
            </View>
          </View>
          <View style={style.section}>
            <Text style={style.sectionTitle}>Writing & Speaking</Text>
            <View style={style.sectionBody}>
              <Card title="Part 1" image='mini-test.png' firstColor='#EC6692' secondColor='#EEABC1' />
              <Card title="Part 1" image='mini-test.png' firstColor='#DE8FEF' secondColor='#FAE3FF' />
            </View>
          </View>
        </View>
      </ScrollView>
    </AlertNotificationRoot>

  )
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: 30,
    paddingTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00D715',
    textTransform: 'uppercase',
  },
  description: {
    color: GREY,
  },
  section: {
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  sectionBody: {
    display: 'flex',
    flexDirection: 'row',
  },
})