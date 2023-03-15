import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {ScreenHeight, ScreenWidth} from '../Common';
import InputComponent from '../components/InputComponent';
import {GREEN, GREY, LIGHT_GREY} from '../constants/color';

export default function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  function googleButton() {
    return (
      <View
        style={{
          flex: 1.5,
          justifyContent: 'space-around',
          // backgroundColor: '#234',
        }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={{color: GREY, alignSelf: 'center'}}>OR</Text>
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require('../assets/icons/google.png')}
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function loginForm() {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.loginLabel}>Login</Text>
        <InputComponent icon="at" placeholder="Email" />
        <InputComponent icon="lock" placeholder="Password" isPassword={true} />
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoSection}>
        <Image
          source={require('../assets/images/login.png')}
          style={styles.loginImage}
        />
      </View>
      {!isSignUp ? (
        <View style={styles.centerContainer}>
          {loginForm()}
          {googleButton()}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              // backgroundColor: '#234',
            }}>
            <TouchableOpacity
              style={styles.text}
              onPress={() => setIsSignUp(!isSignUp)}>
              <Text>Don't have an account?</Text>
              <Text style={{color: GREEN, marginLeft: 3}}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.centerContainer}>{googleButton()}</View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
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
    height: ScreenHeight / 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButton: {
    width: ScreenWidth * 0.85,
    backgroundColor: LIGHT_GREY,
    borderRadius: 15,
    marginVertical: 10,
    height: ScreenHeight / 18,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  googleIcon: {
    height: '80%',
    flex: 0.1,
    resizeMode: 'contain',
  },
  googleText: {
    flex: 0.6,
    fontSize: 16,
    color: '#000',
  },
  loginImage: {
    height: '95%',
    width: '95%',
    resizeMode: 'contain',
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    marginVertical: 10,
    color: GREEN,
  },
  loginText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textGoogle: {
    color: '#000',
    fontSize: 16,
  },
  loginLabel: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
  },
  logoSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    flex: 2,
    justifyContent: 'space-around',
    width: ScreenWidth * 0.85,
    // backgroundColor: '#999',
  },
  text: {
    flexDirection: 'row',
  },
});
