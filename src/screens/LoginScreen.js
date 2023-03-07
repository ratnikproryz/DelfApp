import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native'
import ScreenHeight from '../Common'
import InputComponent from '../components/InputComponent'

export default function LoginScreen() {
    const [isLogin, setIsLogin] = useState(true)


    function googleBar() {
        return (
            <View style={styles.googleSection}>
                <View style={Object.assign({ marginBottom: 5 }, styles.googleBar)}>
                    <View style={styles.img}>
                        <Image source={require('../assets/google.png')} />
                    </View>
                    <View style={Object.assign({ width: 200 }, styles.centerContainer)}>
                        <Text style={styles.text}>Login with Google</Text>
                    </View>
                </View>
                <Text style={styles.text} onPress={() => setIsLogin(!isLogin)}>
                    {isLogin ? " Don't have an account? Sign Up" : 'Already have an account! Login'}
                </Text>
            </View>
        )
    }
    return (
        <View style={styles.body}>
            <View style={Object.assign({}, styles.logoSection, styles.centerContainer)}>
                <Text style={styles.appName}>DELF PRACTICE</Text>

            </View>
            {isLogin ?
                <View style={styles.centerContainer}>
                    <InputComponent icon="at" placeholder='Enter your email!' />
                    <InputComponent icon="lock" placeholder='Enter your password!' isPassword={true} />
                    <Button title='Login' style={styles.button} />
                    {googleBar()}
                </View>
                :
                <View style={styles.centerContainer}>
                    <InputComponent icon="user" placeholder='Enter your name!' />
                    <InputComponent icon="at" placeholder='Enter your email!' />
                    <InputComponent icon="lock" placeholder='Enter your password!' isPassword={true} />
                    <InputComponent icon="lock" placeholder='Confirm your password!' isPassword={true} />
                    <Button title='Sign up' style={styles.button} />
                    {googleBar()}
                </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    body: {
        backgroundColor: '#19C5AF',
        height: ScreenHeight,
    },
    centerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
    },
    googleSection: {
        position: 'absolute',
        width: 250,
        height: 50,
        top: 0.4 * ScreenHeight,
        alignItems: 'center',
    },
    googleBar: {
        backgroundColor: '#438AFE',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700',
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 5,
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoSection: {
        paddingTop: 0.3*ScreenHeight,
        paddingBottom: 20,
    },
    appName: {
        fontSize: 30,
        color: '#ffffff',
        fontWeight: '700',
    }
})