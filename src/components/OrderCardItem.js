import React from 'react';
import {View} from 'react-native';
import {Button, Card, Subheading, Title} from 'react-native-paper';
import {COLORS} from '../config/Colors';
const OrderCardItem = (props) => {
  return (
    <Card style={{marginVertical: 5}} key={props.index}>
      <Card.Content>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Title>{'Order Date'}</Title>
          <Subheading>{props.item.orderDate}</Subheading>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Subheading>Total Items:</Subheading>
          <Subheading>{props.item.orderItems.length}</Subheading>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Subheading>Item(s) Price:</Subheading>
          <Subheading>₹{props.item.totalPrice}</Subheading>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Subheading>Delivery Charges:</Subheading>
          <Subheading>₹ {props.item.deliveryCharge}</Subheading>
        </View>
      </Card.Content>
      <Card.Actions
        style={{
          justifyContent: props.navigation ? 'space-between' : 'flex-end',
          borderTopColor: '#ddd',
          borderTopWidth: 1,
        }}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Subheading>Total Price:</Subheading>
          <Subheading style={{color: COLORS.SECONDARY}}>
            ₹ {props.item.totalPrice + props.item.deliveryCharge}
          </Subheading>
        </View>
        {props.navigation && (
          <Button
            color={COLORS.PRIMARY}
            onPress={() => props.navigation.push('TrackOrder', props.item)}>
            Track Order
          </Button>
        )}
      </Card.Actions>
    </Card>
  );
};

export default OrderCardItem;
