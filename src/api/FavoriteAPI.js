import axios from 'axios';
import {BaseURL} from '../constants/Common';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFavorites = async () => {
  try {
    const token = await AsyncStorage.getItem('@authToken');
    console.log(token);
    const response = await axios.get(`${BaseURL}/favorites`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('FavoriteAPI.js: ', response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const saveFavorite = async (word, type, meaning) => {
  try {
    const token = await AsyncStorage.getItem('@authToken');
    const response = await axios.post(
      `${BaseURL}/favorites`,
      {
        word: word,
        type: type,
        meaning: meaning,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const removeFavorite = async id => {
  try {
    const token = await AsyncStorage.getItem('@authToken');
    const response = await axios.delete(`${BaseURL}/favorites/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getRandomWord = async () => {
  try {
    const token = await AsyncStorage.getItem('@authToken');
    console.log(token);
    const response = await axios.get(`${BaseURL}/favorites/random`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
