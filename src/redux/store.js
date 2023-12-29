import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/AuthReducer';

const reducers = combineReducers({ auth: AuthReducer });
const store = configureStore({ reducer: reducers }, applyMiddleware(thunk));
export default store;
