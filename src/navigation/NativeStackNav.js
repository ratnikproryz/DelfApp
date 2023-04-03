import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import FavoriteScreen from '../screens/FavoriteScreen'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ResultScreen from '../screens/ResultScreen'
import VocabularyScreen from '../screens/VocabularyScreen'
import WordScreen from '../screens/WordScreen';
import MainBottomNav from './MainBottomNav'

const Stack = createNativeStackNavigator()
export default function NativeStackNav() {
  return (
    <Stack.Navigator
      initialRouteName='BottomNav'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='BottomNav' component={MainBottomNav} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Favorite' component={FavoriteScreen} />
      <Stack.Screen name='Vocabulary' component={VocabularyScreen} />
      <Stack.Screen name='Result' component={ResultScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Word' component={WordScreen} />
    </Stack.Navigator>
  )
}
