import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getDicExamples } from '../api/TransAPI';
import { removeFavorite, saveFavorite } from '../api/FavoriteAPI';
import { useSelector } from 'react-redux';

export default function WordScreen({ navigation, route }) {
  const params = route.params;
  const [isFavor, setIsFavor] = useState(params?.isFavorite ? true : false);
  const [examples, setExamples] = useState([]);
  const [id, setId] = useState(null);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    getExample();
  }, []);

  const getExample = async () => {
    const response = await getDicExamples(
      params.word,
      params.meaning.split(',')[0],
    );
    let examples = [];
    response.examples.forEach(element => {
      let item = {
        sourceEx:
          element.sourcePrefix + element.sourceTerm + element.sourceSuffix, // ex in fr
        targetEx:
          element.targetPrefix + element.targetTerm + element.targetSuffix, // ex in en
      };
      examples.push(item);
    });
    setExamples(examples);
  };
  const toggleFavorHandler = async () => {
    if (!isFavor) {
      const response = await saveFavorite(
        token,
        params.word,
        params.wordType,
        params.meaning,
      );
      setId(response.data.data._id);
    } else {
      await removeFavorite(token, id);
      setId(null);
    }
    setIsFavor(!isFavor);
  };

  return (
    <View style={styles.body}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 10,
        }}>
        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 20 }}>
          {params.word}
          <Text
            style={{
              color: '#000000',
              fontWeight: 'normal',
              fontSize: 16,
              fontStyle: 'italic',
            }}>
            {' '}
            [{params.wordType}]
          </Text>
        </Text>
        <TouchableOpacity
          style={{ justifyContent: 'center' }}
          onPress={toggleFavorHandler}>
          {isFavor && <Icon name="heart" size={20} color="red" />}
          {!isFavor && <Icon name="heart-o" size={20} color="#000000" />}
        </TouchableOpacity>
      </View>
      <Text style={{ color: '#BC44E6', fontSize: 16 }}>
        Meaning: {params.meaning}
      </Text>
      <Text
        style={{
          color: '#000000',
          fontSize: 16,
          textDecorationLine: 'underline',
        }}>
        Example:
      </Text>
      {examples.map((element, index) => (
        <View key={index}>
          <Text style={{ color: '#0B5DAC', fontSize: 16 }}>
            {element.sourceEx}
          </Text>
          <Text style={{ color: '#000000', fontSize: 16, fontStyle: 'italic' }}>
            <Icon name="arrow-right" size={16} />
            {element.targetEx}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
  },
});
