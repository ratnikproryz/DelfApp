import axios from 'axios';
import {BaseURL} from '../constants/Common';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFavorites = async token => {
  try {
    console.log(token);
    const response = await axios.get(`${BaseURL}/favorites/my-favorites`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log('FavoriteAPI.js - getFavorites: ', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveFavorite = async (token, word, type, meaning) => {
  try {
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
    console.log('FavoriteAPI.js - saveFavorite: ', response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const removeFavorite = async (token, id) => {
  try {
    const response = await axios.delete(`${BaseURL}/favorites/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('FavoriteAPI.js - saveFavorite: status: ', response.status);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const getRandomWord = async token => {
  try {
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
