import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import VocabularyScreen from '../screens/VocabularyScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ResultScreen from '../screens/ResultScreen';
import ChatGPTScreen from '../screens/ChatGPTScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import WordScreen from '../screens/WordScreen';
import MainBottomNav from './MainBottomNav';
import ListTestScreen from '../screens/ListTestScreen';
import MiniTestScreen from '../screens/MiniTestScreen';
import FullTestDetailScreen from '../screens/FullTestDetailScreen';
import VocabGameScreen from '../screens/VocabGameScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import ForgotPassordScreen from '../screens/ForgotPassordScreen';
import LoginScreen from '../screens/LoginScreen';
import FullTestReviewScreen from '../screens/FullTestReviewScreen';
import VocabularyDetail from '../screens/VocabularyDetail';

const Stack = createNativeStackNavigator();
export default function NativeStackNav() {
  return (
    <Stack.Navigator
      initialRouteName="BottomNav"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomNav" component={MainBottomNav} />
      <Stack.Screen name="HomeSt" component={HomeScreen} />
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
      <Stack.Screen name="Vocabulary" component={VocabularyScreen} />
      <Stack.Screen name="VocabularyDetail" component={VocabularyDetail} />
      <Stack.Screen name="Result" component={ResultScreen} />
      <Stack.Screen name="ChatGPT" component={ChatGPTScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Word" component={WordScreen} />
      <Stack.Screen name="ListTest" component={ListTestScreen} />
      <Stack.Screen name="FullTestDetail" component={FullTestDetailScreen} />
      <Stack.Screen name="MiniTest" component={MiniTestScreen} />
      <Stack.Screen name="VocabGame" component={VocabGameScreen} />
      <Stack.Screen name="ChangePW" component={ChangePasswordScreen} />
      <Stack.Screen name="ForgotPW" component={ForgotPassordScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="FullTestReview" component={FullTestReviewScreen} />
    </Stack.Navigator>
  );
}
