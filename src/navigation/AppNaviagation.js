import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { autoLogin, getAuth } from '../redux/actions/AuthAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NativeStackNav from './NativeStackNav';

export default function AppNaviagation() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem('@authToken');
      console.log('Token: ', token);
      if (token !== null) {
        dispatch(autoLogin(token));
        dispatch(getAuth(token));
      }
    }
    getToken();
  }, []);

  return (
    <NavigationContainer>
      <NativeStackNav />
    </NavigationContainer>
  );
}
