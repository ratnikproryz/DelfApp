import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import WordItem from '../components/WordItem';
import { getVocabularies } from '../api/VocabularyAPI';
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { getFavorites } from '../api/FavoriteAPI';

export default function VocabularyScreen({ navigation }) {
  const isFocused = useIsFocused();
  const [vocabularies, setVocabularies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    getVocabulariesList();
    getFavoritesList();
  }, [isFocused]);

  const getVocabulariesList = async () => {
    const response = await getVocabularies(token);
    setVocabularies(response.data);
  };

  const getFavoritesList = async () => {
    const response = await getFavorites(token);
    setFavorites(response.data);
  };

  const navigatehandler = item => {
    // navigation.navigate('Word', {
    //   word: item.word,
    //             type: item.partOfSpeech,
    //             meaning: item.definition,
    //             phonetic: item?.phonetic,
    //   isFavorite: favorites,
    // });
    alert('Maintaining!');
  };

  return (
    <ScrollView style={styles.body}>
      {vocabularies.map(item => (
        <WordItem
          key={item._id}
          item={{
            word: item.word,
            type: item.partOfSpeech,
            meaning: item.definition,
            phonetic: item?.phonetic,
            isFavorite: favorites.some(el => el.word === item.word),
            _id: favorites.find(el => el.word === item.word),
          }}
          onPress={navigatehandler}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
});
