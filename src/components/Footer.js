import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BLACK, BLUE} from '../constants/color';

export default function Footer(props) {
  const size = 24,
    color = BLACK;
  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <View style={styles.section}>
        <TouchableOpacity onPress={props.onBack}>
          <Icon name="chevron-left" size={size} color={color} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="warning" size={size} color={color} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="heart-o" size={size} color={color} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="list-ul" size={size} color={color} />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onNext}>
          <Icon name="chevron-right" size={size} color={color} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
