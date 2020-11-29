import React from 'react';
import {Image, View} from 'react-native';
import {Button, Title} from 'react-native-paper';
import {COLORS} from '../config/Colors';

const ThankYou = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <Image
        style={{resizeMode: 'cover', height: 300, width: 350}}
        source={{
          uri:
            'https://image.freepik.com/free-vector/order-confirmed-concept-illustration_114360-1486.jpg',
        }}
      />
      <Title style={{textAlign: 'center'}}>
        Your Order Has Been Placed Successfully For More Details Go To My
        Orders.
      </Title>
      <Button
        color={COLORS.PRIMARY}
        mode="contained"
        onPress={() => {
          navigation.navigate('Orders');
        }}>
        My Orders
      </Button>
    </View>
  );
};

export default ThankYou;
