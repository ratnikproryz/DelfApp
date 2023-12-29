import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTO_LOGIN, GET_AUTH, LOGIN, LOGOUT } from '../actions/AuthAction';

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
    case AUTO_LOGIN:
      return {
        ...state,
        token: action.payload,
        isAuth: true,
      };
    case LOGOUT:
      AsyncStorage.removeItem('@authToken');
      return {
        ...state,
        user: '',
        token: '',
        isAuth: false,
      };
    case GET_AUTH:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
