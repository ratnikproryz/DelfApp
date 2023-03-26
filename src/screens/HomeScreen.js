import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { getDicExamples, lookUp } from '../api/TransAPI';
import Card from '../components/Card';
import InputComponent from '../components/InputComponent'
import SearchComponet from '../components/SearchComponet';
import { BLACK, GREEN, GREY } from '../constants/color';


export default function HomeScreen() {
  const [word, setWord] = useState('')
  const search = async () => {
    console.log(word);
    const response = await getDicExamples(word)
    console.log(response.lookUp);
    console.log(response.exapmle);
  }

  return (
    <ScrollView>
      <View style={style.body}>
        <View style={style.container}>
          <Text style={style.title}>Delf Practice</Text>
          <Text style={style.description}>Parlez-vous français? Practice anytime, anywhere with our app!</Text>
          <SearchComponet icon='search' placeholder="Search Vocabulary" onChangeText={setWord} onPress={search} />
          <View style={style.section}>
            <Text style={style.sectionTitle}>DELF Practice</Text>
            <View style={style.sectionBody}>
              <Card title="Mini Test" image='mini-test.png' firstColor='#8EFFE2' secondColor='#E3FFF8' />
              <Card title="Full Test" image='mini-test.png' firstColor='#A4FDCC' secondColor='#E9FDF2' />
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
      </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  body: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  container: {
    paddingLeft: 30,
    paddingRight: 30,
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