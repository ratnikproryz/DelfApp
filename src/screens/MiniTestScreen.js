import React from 'react';
import { StyleSheet, View } from 'react-native';
import TestCard from '../components/TestCard';

export default function MiniTestScreen() {
  return (
    <View style={styles.body}>
      <TestCard />
      <TestCard />
      <TestCard />
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
