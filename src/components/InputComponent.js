import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScreenHeight, ScreenWidth } from '../Common';

export default function InputComponent(props) {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [eyeIcon, setEyeIcon] = useState('eye-slash');

  const showPassword = () => {
    console.log('ok');
    setEyeIcon(eyeIcon == 'eye' ? 'eye-slash' : 'eye');
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <View style={styles.body}>
      <Icon name={props.icon} style={styles.icon} size={16} color="#7E7E7E" />
      {props.isPassword ? (
        <>
          <TextInput
            style={styles.input}
            value={props.value}
            placeholder={props.placeholder}
            secureTextEntry={!passwordVisibility}
            onChangeText={props.onChangeText}
          />
          <Icon
            name={eyeIcon}
            onPress={() => showPassword()}
            style={Object.assign({ paddingRight: 10 }, styles.icon)}
            size={16}
            color="#7E7E7E"
          />
        </>
      ) : (
        <TextInput
          style={styles.input}
          value={props.value}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    borderRadius: 15,
    marginVertical: 10,
    height: ScreenHeight / 18,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    backgroundColor: 'white',
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    paddingLeft: 10,
    width: '80%',
  },
});
