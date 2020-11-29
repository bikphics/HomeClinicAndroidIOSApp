import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// To Show Dynamic Route from the individual SErvices
const ServiceDetailComponent = (props) => {
  console.log(props.route.params);
  return (
    <View>
      <Text>Service detail Screen</Text>
    </View>
  );
};

export default ServiceDetailComponent;

const styles = StyleSheet.create({});
