import axios from 'axios';
import {BaseURL} from '../constants/Common';
import {Dialog, ALERT_TYPE} from 'react-native-alert-notification';

export const initResult = async (exam_id, userID) => {
  // console.log('ResultApi.js:initResult: ', exam_id, ' - ', userID);
  try {
    const response = await axios.post(
      `${BaseURL}/results`,
      {
        user: userID,
        examination: exam_id,
        score: 0,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const submitAnswers = async (answers, result_id, successCallBack) => {
  try {
    const response = await axios.post(
      `${BaseURL}/answers`,
      {
        answers: JSON.stringify(Array.from(answers.entries())),
        result_id: result_id,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    console.log(response.data.data);
    Dialog.show({
      type: ALERT_TYPE.SUCCESS,
      title: response.data.data.score + '/75',
      textBody:
        'Congratulate! You have finished the test! Click OK to go back! ',
      button: 'OK',
      onPressButton: successCallBack,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getResult = async userID => {
  try {
    const response = await axios.get(`${BaseURL}/results?user=${userID}`);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAnswersSubmitted = async resultID => {
  try {
    const response = await axios.get(`${BaseURL}/answers?result=${resultID}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
