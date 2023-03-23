import axios from "axios";
import { BaseURL } from "../constants/Common";
import { Toast, ALERT_TYPE } from 'react-native-alert-notification';

export const signUp = async (name, email, password, passwordConfirm) => {
    try {
        const response = await axios.post(`${BaseURL}/users/signup`, {
            name: name,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm
        })
        console.log(response.data);
        Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'Create account successfully',
        })
    } catch (error) {
        console.log("error: " + error);
        Toast.show({
            type: ALERT_TYPE.DANGER,
            title: 'Error',
            textBody: 'Please check the credentials and try again!',
        })
    }
}
