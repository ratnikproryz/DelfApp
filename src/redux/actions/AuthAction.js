import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BaseURL} from '../../constants/Common';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const AUTO_LOGIN = 'AUTO_LOGIN';
export const GET_AUTH = 'GET_AUTH';

export const login = (email, password) => async dispatch => {
  try {
    const response = await axios.post(`${BaseURL}/users/login`, {
      email: email,
      password: password,
    });
    dispatch({
      type: LOGIN,
      payload: {
        user: response.data.data.user,
        token: response.data.token,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const autoLogin = token => dispatch => {
  dispatch({
    type: AUTO_LOGIN,
    payload: token,
  });
};

export const logout = token => async dispatch => {
  dispatch({
    type: LOGOUT,
    payload: '',
  });
};

export const getAuth = token => async dispatch => {
  try {
    const response = await axios.get(`${BaseURL}/users/me`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: GET_AUTH,
      payload: response.data.data,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const loginGG = idToken => async dispatch => {
  try {
    const response = await axios.post(
      `${BaseURL}/users/login-google`,
      {
        idToken: idToken,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    console.log('AuthAction.js:loginGG: ', response.data);
    dispatch({
      type: LOGIN,
      payload: {
        user: response.data.data.user,
        token: response.data.token,
      },
    });
  } catch (error) {
    console.error(error.message);
  }
};
