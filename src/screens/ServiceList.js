import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const ServiceList = (props) => (
  <View>
    <Text>Service detail Screen</Text>
    <Button onPress={() => props.navigation.navigate('ServiceDetail')}>
      Service Provider Details Screen
    </Button>
  </View>
);

export default ServiceList;

const styles = StyleSheet.create({});
