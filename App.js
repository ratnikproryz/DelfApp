/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import MainBottomNav from './src/navigation/MainBottomNav'
import LoginScreen from './src/screens/LoginScreen'

export default function App() {
  return (
    <LoginScreen />
    // <NavigationContainer>
    //   <MainBottomNav />
    // </NavigationContainer>
  )
}

