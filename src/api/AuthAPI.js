import axios from 'axios';
import {BaseURL} from '../constants/Common';
import {Toast, ALERT_TYPE} from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signUp = async (name, email, password, passwordConfirm) => {
  try {
    const response = await axios.post(`${BaseURL}/users/signup`, {
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    });
    console.log(response.data);
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Success',
      textBody: 'Create account successfully',
    });
  } catch (error) {
    console.log('error: ' + error);
    Toast.show({
      type: ALERT_TYPE.DANGER,
      title: 'Error',
      textBody: 'Please check the credentials and try again!',
    });
  }
};

export const changePassword = async (
  currentPW,
  newPW,
  confirmPW,
  setError,
  setSuccess,
) => {
  try {
    const token = await AsyncStorage.getItem('@authToken');
    const response = await axios.patch(
      `${BaseURL}/users/updatePassword`,
      {
        passwordCurrent: currentPW,
        password: newPW,
        passwordConfirm: confirmPW,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    AsyncStorage.setItem('@authToken', response.data.token);
    setSuccess('Change password successfully');
    setError('');
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Success',
      textBody: 'Change password successfully',
    });
  } catch (error) {
    console.log('error' + error);
    setError('Fail! The password is not correct!');
    setSuccess('');
    Toast.show({
      type: ALERT_TYPE.DANGER,
      title: 'Error',
      textBody: 'Fail! The password is not correct!',
    });
  }
};

export const sendEmail = async (email, setError, setSuccess) => {
  try {
    const response = await axios.post(
      `${BaseURL}/users/forgotPassword`,
      {
        email: email,
      },
      {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Transfer-Encoding': 'chunked',
        Connection: 'keep-alive',
        'Accept-Encoding': 'gzip, deflate, br',
      },
    );
    console.log(response.data);
    setSuccess('Code has been sent to your email!');
    setError('');
  } catch (error) {
    setError('Your email is wrong!');
    setSuccess('');
  }
};
