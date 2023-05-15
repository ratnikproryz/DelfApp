import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Part1 from '../components/Part1';
import Part2_1 from '../components/Part2_1';
import Part2_23 from '../components/Part2_23';
import Part3 from '../components/Part3';
import {useState} from 'react';
import {useEffect} from 'react';
import {getExam} from '../api/ExaminationAPI';
import {submitAnswers} from '../api/ResultApi';
import {AlertNotificationRoot} from 'react-native-alert-notification';

export default function FullTestDetailScreen({navigation, route}) {
  const [index, setIndex] = useState(1);
  const [title, setTitle] = useState([
    'Listening 1',
    'Listening 2',
    'Listening 3',
    'Reading 1',
    'Reading 2',
    'Reading 3',
    'Writing',
  ]);
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState(new Map());
  const [resultID, setResultID] = useState(route.params.result_id);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    getExercises();
  }, []);

  useEffect(() => {
    if (isOver) {
      //auto submit answer when time over
      submitAnswers(answers, resultID, successCallBack);
      console.log('The time is over!');
    }
  }, [isOver]);

  const getExercises = async () => {
    const response = await getExam('6443e4ace8e764e76f044d7b');
    console.log('FullTestDetailScreen.js:getExercises: ', response.data[0]);
    setData(response.data);
  };
  const selectedAnswer = (question_id, answer_id) => {
    setAnswers(answers.set(question_id, answer_id));
    console.log(answers);
  };

  const submit = () => {
    submitAnswers(answers, resultID, successCallBack);
  };
  const successCallBack = () => {
    navigation.goBack();
  };

  const render = index => {
    switch (index) {
      case 1:
        return (
          <Part1
            data={data[0]}
            answers={answers}
            selectedAnswer={selectedAnswer}
          />
        );
      case 2:
        return (
          <Part1
            data={data[1]}
            answers={answers}
            selectedAnswer={selectedAnswer}
          />
        );
      case 3:
        return (
          <Part1
            data={data[2]}
            answers={answers}
            selectedAnswer={selectedAnswer}
          />
        );
      case 4:
        return (
          <Part2_1
            data={data[3]}
            answers={answers}
            selectedAnswer={selectedAnswer}
          />
        );
      case 5:
        return (
          <Part2_23
            data={data[4]}
            answers={answers}
            selectedAnswer={selectedAnswer}
          />
        );
      case 6:
        return (
          <Part2_23
            data={data[5]}
            answers={answers}
            selectedAnswer={selectedAnswer}
          />
        );
      case 7:
        return (
          <Part3
            data={data[6]}
            answers={answers}
            selectedAnswer={selectedAnswer}
          />
        );
      default:
        setIndex(1);
        return (
          <Part1
            data={data[0]}
            answers={answers}
            selectedAnswer={selectedAnswer}
          />
        );
    }
  };

  return (
    <AlertNotificationRoot>
      <View style={styles.body}>
        <Header
          title={title[index - 1]}
          navigation={navigation}
          submit={submit}
          timeLimit={route.params.exam.timeLimit}
          setIsOver={setIsOver}
        />
        {data ? render(index) : null}
        <Footer
          onNext={() => setIndex(index => index + 1)}
          onBack={() => setIndex(index => index - 1)}
        />
      </View>
    </AlertNotificationRoot>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
