import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScreenHeight, ScreenWidth } from '../Common';
import { GREEN, LIGHT_GREY } from '../constants/color';
import InputComponent from '../components/InputComponent';
import { sendEmail } from '../api/AuthAPI';

export default function ForgotPassordScreen() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onGetCode = () => {
    if (!email) {
      setError('Please enter your email address!');
    } else {
      sendEmail(email, setError, setSuccess);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <InputComponent
          icon="lock"
          value={email}
          placeholder="Current Password"
          onChangeText={setEmail}
        />
        <Text style={styles.error}>{error}</Text>
        <Text style={styles.success}>{success}</Text>
        <TouchableOpacity style={styles.button} onPress={onGetCode}>
          <Text style={styles.text}>Get code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    minHeight: ScreenHeight,
    paddingHorizontal: 30,
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: GREEN,
    borderRadius: 15,
    marginVertical: 10,
    height: (ScreenWidth * 0.85) / 7.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    flex: 2,
    justifyContent: 'space-around',
    width: ScreenWidth * 0.85,
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  error: {
    color: '#FF0000',
    fontSize: 16,
    fontStyle: 'italic',
  },
  success: {
    color: GREEN,
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: -25,
  },
});
