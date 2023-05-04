import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScreenHeight, ScreenWidth } from '../Common'
import { GREEN, LIGHT_GREY } from '../constants/color'
import InputComponent from '../components/InputComponent'
import { AlertNotificationRoot } from 'react-native-alert-notification'
import { changePassword } from '../api/AuthAPI'

export default function ChangePasswordScreen() {
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [error, setError] = useState("")
    const [success, setSucces] = useState("")

    const changePasswordHandler = () => {
        if (!currentPassword || !newPassword || !passwordConfirm) {
            setError("Please fill in all credentials")
        }
        if (newPassword != passwordConfirm) {
            setError("Password Confirm is not correct")
        }
        else {
            setError("")
            changePassword(currentPassword, newPassword, passwordConfirm, setError, setSucces)
        }
    }

    return (
        <AlertNotificationRoot theme='light' colors={[{ 'card': '#F0F0F0', }, { 'card': '#000', 'label': '#fff' }]}>
            <View style={styles.container}>
                <View style={styles.centerContainer}>
                    <InputComponent icon="lock" value={currentPassword}
                        placeholder="Current Password" isPassword={true}
                        onChangeText={setCurrentPassword}
                    />
                    <InputComponent icon="lock" value={newPassword}
                        placeholder="New Password" isPassword={true}
                        onChangeText={setNewPassword}
                    />
                    <InputComponent icon="lock" value={passwordConfirm}
                        placeholder="Confirm Password" isPassword={true}
                        onChangeText={setPasswordConfirm}
                    />
                    <Text style={styles.error}>{error}</Text>
                    <Text style={styles.success}>{success}</Text>
                    <TouchableOpacity style={styles.button} onPress={changePasswordHandler}>
                        <Text style={styles.text}>Change Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </AlertNotificationRoot>
    )
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
    }
});