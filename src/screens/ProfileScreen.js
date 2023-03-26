import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {
  Avatar,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import ProfileInfoItem from '../components/ProfileInfoItem';
import { logout } from '../redux/actions/AuthAction';

export default function ProfileScreen() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    console.log('call use effect');
  }, [])

  const logoutHandler = () => {
    dispatch(logout())
  }


  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={[styles.section, styles.center]}>
        <Avatar.Image
          source={require('../assets/images/avatar.png')}
          size={65}
        />
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{user?.name}</Text>
      </View>
      <View style={styles.section}>
        <ProfileInfoItem icon='at' title='Email' value={user?.email} />
        <ProfileInfoItem icon='bullseye' title='Your Goals' value='75/100' />
        <ProfileInfoItem icon='clock-o' title='Daily Reminder' value='8:00 pm' />
      </View>
      <View style={styles.section} >
        <TouchableOpacity onPress={() => { console.log('change pass'); }} style={styles.item}>
          <>
            <Icon name="lock" color="#19C5AF" size={32} />
            <Text style={{ fontWeight: 'bold', fontSize: 16, paddingLeft: 15 }}>  Change passord</Text>
          </>
        </TouchableOpacity>
        <TouchableOpacity onPress={logoutHandler} style={styles.item}>
          <>
            <Icon name="sign-out" color="#19C5AF" size={32} />
            <Text style={{ fontWeight: 'bold', fontSize: 16, paddingLeft: 15 }}>Log out</Text>
          </>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    paddingBottom: 15,
    borderBottomWidth: 0.8,
    borderBottomColor: "#D9D9D9"
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 50
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    paddingTop: 15
  }
})