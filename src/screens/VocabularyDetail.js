import React from 'react';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function VocabularyDetail({ navigation, route }) {
  const [word, setWord] = useState(route.params.word);
  const [isFavor, setIsFavor] = useState(false);

  const toggleFavorHandler = () => {
    setIsFavor(!isFavor);
  };

  return (
    <View style={styles.body}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 10,
          alignItems: 'baseline',
        }}>
        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 20 }}>
          {word.word}
          <Text
            style={{
              color: '#000000',
              fontWeight: 'normal',
              fontSize: 16,
              fontStyle: 'italic',
            }}>
            {` [${word.partOfSpeech}]`}
          </Text>
        </Text>
        <TouchableOpacity
          style={{ justifyContent: 'center' }}
          onPress={toggleFavorHandler}>
          {isFavor && <Icon name="heart" size={20} color="red" />}
          {!isFavor && <Icon name="heart-o" size={20} color="#000000" />}
        </TouchableOpacity>
      </View>
      <Text>{word.pronunciation}</Text>
      <Text style={{ color: '#BC44E6', fontSize: 16 }}>
        Meaning: {word.definition}
      </Text>
      <Text
        style={{
          color: '#000000',
          fontSize: 16,
          textDecorationLine: 'underline',
        }}>
        Example:
      </Text>
      {word?.examples.map((item, index) => (
        <View key={index}>
          <Text style={{ color: '#0B5DAC', fontSize: 16 }}>
            {item.sentence}
          </Text>
          <Text style={{ color: '#000000', fontSize: 16, fontStyle: 'italic' }}>
            <Icon name="arrow-right" size={16} />
            {'  ' + item.translation}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default VocabularyDetail;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
});
