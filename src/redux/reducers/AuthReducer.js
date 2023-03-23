import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN } from '../actions/AuthAction';


const initialState = {
    user: '',
    token: '',
    isAuth: false,
};

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            AsyncStorage.setItem('@authToken', action.payload.token);
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isAuth: true,
            };
        default:
            return state;
    }
}
