import axios from 'axios';
import {BaseURL} from '../constants/Common';

export const getListExams = async type => {
  try {
    const response = await axios.get(`${BaseURL}/examinations?type=${type}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    alert(error.message);
    console.log(error.response.data);
  }
};

export const getExam = async id => {
  try {
    const response = await axios.get(`${BaseURL}/examinations/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log('ExaminationAPI.js:getExam: ', response.data);
    return response.data;
  } catch (error) {
    alert(error.message);
    console.log(error);
  }
};
