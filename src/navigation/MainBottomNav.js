import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import VocabularyScreen from '../screens/VocabularyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ResultScreen from '../screens/ResultScreen';
import { BLACK, GREEN, GREY } from '../constants/color';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function MainBottomNav({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon
          let routeName= route.name
          switch (routeName) {
            case 'Home':
              icon = 'home'
              break
            case 'Favorite':
              icon = 'heart-o'
              break
            case 'Vocabulary':
              icon= 'gamepad'
              break
            case 'Result':
              icon = 'bar-chart-o'
              break
            case 'Profile':
              icon = 'user-circle-o'
              break
          }
          return <Icon name={icon} size={size} color={color} />
        },
        tabBarActiveTintColor: GREEN,
        tabBarInactiveTintColor: GREY,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Vocabulary" component={VocabularyScreen} />
      <Tab.Screen name="Result" component={ResultScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}
