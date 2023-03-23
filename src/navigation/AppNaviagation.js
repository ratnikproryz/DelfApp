import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import LoginScreen from '../screens/LoginScreen';
import MainBottomNav from './MainBottomNav';

export default function AppNaviagation() {
    const isAuth = useSelector(state => state.auth.isAuth);
    return (
        <NavigationContainer>
            {!isAuth && <LoginScreen />}
            {isAuth && <MainBottomNav />}
        </NavigationContainer>
    )
}
