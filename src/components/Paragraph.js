import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Paragraph(props) {
  return (
    <View style={styles.container}>
      <ScrollView style={[styles.body, styles.shadowProp]}>
        <Text style={styles.content}>{props.paragraph}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderRadius: 5,
  },
  shadowProp: {
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  content: {
    textAlign: 'justify',
    paddingTop: 15,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    maxHeight: 300,
  },
});
