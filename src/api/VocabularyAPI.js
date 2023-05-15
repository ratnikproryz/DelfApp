import axios from 'axios';
import {BaseURL} from '../constants/Common';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getVocabularies = async token => {
  try {
    console.log(token);
    const response = await axios.get(`${BaseURL}/vocabularies`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('VocabularyAPI.js - getVocabularies: ', response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createVocabulary = async (token, word, type, meaning) => {
  try {
    const response = await axios.post(
      `${BaseURL}/vocabularies`,
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
    console.log('VocabularyAPI.js - createVocabulary: ', response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteVocabulary = async (token, id) => {
  try {
    const response = await axios.delete(`${BaseURL}/vocabularies/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('VocabularyAPI.js - deleteVocabulary: ', response.status);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};
