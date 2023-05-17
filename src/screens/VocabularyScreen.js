import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import WordItem from '../components/WordItem';
import {getVocabularies} from '../api/VocabularyAPI';
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export default function VocabularyScreen({navigation}) {
  const isFocused = useIsFocused();
  const [vocabularies, setVocabularies] = useState([]);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    getVocabulariesList();
  }, [isFocused]);

  const getVocabulariesList = async () => {
    const response = await getVocabularies(token);
    setVocabularies(response.data);
  };

  const navigatehandler = item => {
    // navigation.navigate('Word', {
    //   word: item.word,
    //   wordType: item.type,
    //   meaning: item.meaning,
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
