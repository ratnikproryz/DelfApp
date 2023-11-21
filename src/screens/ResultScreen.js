import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { GREEN } from '../constants/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect } from 'react';
import { getResults } from '../api/ResultApi';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

export default function ResultScreen({ navigation }) {
  const isFocused = useIsFocused();
  const [results, setResults] = useState([]);
  const user = useSelector(state => state.auth.user);
  const [accuracy, setAccuracy] = useState(0);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    getResultsList();
  }, [isFocused]);

  const getResultsList = async () => {
    const response = await getResults(token);
    setResults(response);
    console.log('ResultScreen.js - getResultsList: ', results);
    let totalScore = response.data.reduce(
      (accumulator, currentValue) => accumulator + currentValue.score,
      0,
    );
    setAccuracy(((totalScore * 100) / (response.results * 75)).toFixed(2));
  };

  const onReview = (resultID, examID) => {
    console.log('result id: ' + resultID);
    console.log('exam id: ' + examID);
    navigation.navigate('FullTestReview', {
      examID: examID,
      resultID: resultID,
    });
  };

  return (
    <View style={styles.body}>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.center, styles.shadowProp]}>
          <Text style={styles.cardTitle}>Tests</Text>
          <Text style={styles.cardValue}>{results.results}</Text>
        </View>
        <View style={[styles.card, styles.center, styles.shadowProp]}>
          <Text style={styles.cardTitle}>Accuracy</Text>
          <Text style={styles.cardValue}>{accuracy}%</Text>
        </View>
      </View>
      <View style={styles.table}>
        <View style={[styles.row, { backgroundColor: GREEN }]}>
          <Text style={[styles.header, { width: '15%' }]}> ID</Text>
          <Text style={[styles.header, { width: '45%' }]}>Test</Text>
          <Text style={[styles.header, { width: '25%' }]}>Type</Text>
          <Text style={[styles.header, { width: '15%' }]}>Point</Text>
        </View>
        <ScrollView>
          {results?.data?.map((item, index) => (
            <TouchableOpacity
              key={item._id}
              style={styles.row}
              onPress={() => onReview(item._id, item.examination._id)}>
              <Text style={[styles.text, { width: '15%' }]}> {index + 1}</Text>
              <Text style={[styles.text, { width: '45%' }]}>
                {item.examination.name}
              </Text>
              <Text style={[styles.text, { width: '25%' }]}>
                {item.examination.type}
              </Text>
              <Text style={[styles.text, { width: '15%' }]}>
                {item.score}/75
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  card: {
    width: '45%',
    height: 100,
    backgroundColor: GREEN,
    borderRadius: 10,
  },
  shadowProp: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardValue: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  header: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  table: {
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
