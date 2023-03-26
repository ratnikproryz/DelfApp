import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import LoginScreen from '../screens/LoginScreen';
import MainBottomNav from './MainBottomNav';
import { autoLogin } from '../redux/actions/AuthAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AppNaviagation() {
    const isAuth = useSelector(state => state.auth.isAuth);
    const dispatch = useDispatch();
    useEffect(() => {
        async function getToken() {
            const token = await AsyncStorage.getItem('@authToken');
            console.log(token);
            if (token !== null) {
                dispatch(autoLogin(token));
            }
        }
        getToken();
    }, []);


    return (
        <NavigationContainer>
            {!isAuth && <LoginScreen />}
            {isAuth && <MainBottomNav />}
        </NavigationContainer>
    )
}
