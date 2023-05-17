import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BLACK, GREEN} from '../constants/color';
import {removeFavorite, saveFavorite} from '../api/FavoriteAPI';
import {useSelector} from 'react-redux';
import Sound from 'react-native-sound';

export default function WordItem(props) {
  Sound.setCategory('Playback');
  const [sound, setSound] = useState(null);
  const [isFavorite, setFavorite] = useState(true);
  const [id, setID] = useState(props.item._id);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (props.item?.phonetic) {
      getSound();
    }
  }, []);

  const getSound = () => {
    let sound = new Sound(props.item?.phonetic, Sound.MAIN_BUNDLE, err => {
      if (err) {
        console.log('WordItem.js - playSound: ', err);
        return;
      }
    });
    setSound(sound);
  };
  const playSound = () => {
    if (sound !== null) {
      sound.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
          getSound();
        }
      });
    }
  };
  const toggleFavorHandler = async () => {
    if (!isFavorite) {
      const response = await saveFavorite(
        token,
        props.item.word,
        props.item.type,
        props.item.meaning,
      );
      setID(response.data.data._id);
    } else {
      await removeFavorite(token, id);
      setID(null);
    }
    setFavorite(!isFavorite);
  };

  return (
    isFavorite && (
      <TouchableOpacity
        style={styles.item}
        onPress={() => props.onPress(props.item)}>
        <TouchableOpacity style={styles.volume} onPress={playSound}>
          <Icon name="volume-up" size={20} color={'#fff'} />
        </TouchableOpacity>
        <View style={styles.content}>
          <View style={styles.wordPronoun}>
            <Text style={styles.word}>{props.item.word}</Text>
            <Text>[{props.item.type}]</Text>
          </View>
          <Text>{props.item.meaning}</Text>
        </View>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={toggleFavorHandler}>
          {isFavorite && <Icon name="heart" size={20} color={'red'} />}
          {!isFavorite && <Icon name="heart-o" size={20} color={'#000000'} />}
        </TouchableOpacity>
      </TouchableOpacity>
    )
  );
}
const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
  },
  volume: {
    borderRadius: 50,
    backgroundColor: GREEN,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  wordPronoun: {
    flexDirection: 'row',
  },
  word: {
    color: BLACK,
    fontWeight: '700',
    paddingRight: 10,
  },
  favoriteButton: {
    position: 'absolute',
    right: 0,
    height: '100%',
    width: '12%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
