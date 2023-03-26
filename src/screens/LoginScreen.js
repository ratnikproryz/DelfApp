import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { useDispatch } from 'react-redux';
import { signUp } from '../api/AuthAPI';
import { ScreenHeight, ScreenWidth } from '../Common';
import InputComponent from '../components/InputComponent';
import { GREEN, GREY, LIGHT_GREY } from '../constants/color';
import { login } from '../redux/actions/AuthAction';

export default function LoginScreen() {
  const dispatch = useDispatch()
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPassordConfirm] = useState("")

  const loginHandler = () => {
    dispatch(login(email, password))
  }
  const signUpHandler = () => {
    signUp(name, email, password, passwordConfirm)
  }

  function googleButton() {
    return (
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require('../assets/icons/google.png')}
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>Login with Google</Text>
      </TouchableOpacity>
    );
  }

  function loginForm() {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.loginLabel}>Login</Text>
        <InputComponent icon="at" value={email} placeholder="Email" onChangeText={setEmail} />
        <InputComponent icon="lock" value={password} placeholder="Password" isPassword={true} onChangeText={setPassword} />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function signUpForm() {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.loginLabel}>Sign up</Text>
        <InputComponent icon="at" value={email} placeholder="Email" onChangeText={setEmail} />
        <InputComponent icon="at" value={name} placeholder="Username" onChangeText={setName} />
        <InputComponent icon="lock" value={password} placeholder="Password" isPassword={true} onChangeText={setPassword} />
        <InputComponent
          icon="lock"
          value={passwordConfirm}
          placeholder="Confirm password"
          isPassword={true}
          onChangeText={setPassordConfirm}
        />
      </View>
    );
  }
  return (
    <AlertNotificationRoot theme='light' colors={[{ 'card': '#F0F0F0', }, { 'card': '#000', 'label': '#fff' }]}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <View style={styles.logoSection}>
          <Image source={require('../assets/images/login.png')} style={styles.loginImage}
          />
        </View>
        {!isSignUp ? (
          <View style={styles.centerContainer}>
            {loginForm()}
            <View style={{ flex: 1.5, justifyContent: 'space-around', }}>
              <TouchableOpacity style={styles.button} onPress={() => loginHandler()}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
              <Text style={{ color: GREY, alignSelf: 'center' }}>OR</Text>
              {googleButton()}
            </View>
            <View style={{ flex: 1, justifyContent: 'center', }}>
              <TouchableOpacity style={styles.text} onPress={() => setIsSignUp(!isSignUp)}>
                <Text>Don't have an account?</Text>
                <Text style={{ color: GREEN, marginLeft: 3 }}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.centerContainer}>
            {signUpForm()}
            <View style={{ flex: 1.5, justifyContent: 'space-around', }}>
              <TouchableOpacity style={styles.button} onPress={() => signUpHandler()}>
                <Text style={styles.loginText}>Sign up</Text>
              </TouchableOpacity>
              <Text style={{ color: GREY, alignSelf: 'center' }}>OR</Text>
              {googleButton()}
            </View>
            <View style={{ flex: 1, justifyContent: 'center', }}>
              <TouchableOpacity style={styles.text} onPress={() => setIsSignUp(!isSignUp)}>
                <Text>Already have an account?</Text>
                <Text style={{ color: GREEN, marginLeft: 3 }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </AlertNotificationRoot>

  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    minHeight: ScreenHeight,
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
  googleButton: {
    width: ScreenWidth * 0.85,
    backgroundColor: LIGHT_GREY,
    borderRadius: 15,
    marginVertical: 10,
    height: (ScreenWidth * 0.85) / 7.3,
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
  },
  text: {
    flexDirection: 'row',
  },
});
