/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { Provider } from 'react-redux'
import AppNaviagation from './src/navigation/AppNaviagation'
import store from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <AppNaviagation />
    </Provider>
  )
}

