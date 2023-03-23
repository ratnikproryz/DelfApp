import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BaseURL } from '../../constants/Common';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (email, password) => async dispatch => {
    try {
        const response = await axios.post(`${BaseURL}/users/login`, {
            email: email,
            password: password,
        })
        dispatch({
            type: LOGIN,
            payload: {
                user: response.data.data.user,
                token: response.data.token
            }
        })
    } catch (err) {
        console.log(err);
    }
}

// export const signUp = (name, email, password, passwordConfirm) => async dispatch => {
//     try {
//         const response = await axios.post(`${BaseURL}/users/signup`,{
//             name: name,
//             email: email,
//             password: password,
//             passwordConfirm: passwordConfirm
//         })
//         console.log(response.data);
//         dispatch({

//         })
//     } catch (error) {
//         console.log(error);
//     }
// }