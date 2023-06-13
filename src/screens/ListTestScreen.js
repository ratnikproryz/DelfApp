import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import TestCard from '../components/TestCard';
import { useState } from 'react';
import { getListExams } from '../api/ExaminationAPI';
import { initResult } from '../api/ResultApi';
import { useSelector } from 'react-redux';

export default function ListTestScreen({ navigation, route }) {
  const [exams, setExams] = useState([]);
  const user = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    getExams();
  }, []);

  const getExams = async () => {
    const response = await getListExams(route.params.type);
    // console.log('ListTestScreen.js:getExams: ', response.data);
    setExams(response.data);
  };

  const pressHandler = async item => {
    const response = await initResult(token, item._id);
    // console.log('ListTestScreen.js:pressHandler: ', response.data);
    navigation.navigate('FullTestDetail', {
      exam: item,
      result_id: response.data._id,
    });
  };

  return (
    <View style={styles.body}>
      {exams?.map(item => (
        <TestCard
          onPress={() => pressHandler(item)}
          key={item._id}
          name={item.name}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#ffffff',
  },
});
