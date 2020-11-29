import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeadingSection = ({headingText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All Services</Text>
    </View>
  );
};

export default HeadingSection;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingLeft: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
  },
});
