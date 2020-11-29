import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../screens/Cart';
import ConfirmOrder from '../screens/ConfirmOrder';
import ThankYou from '../screens/ThankYou';
const Stack = createStackNavigator();
const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
      <Stack.Screen name="ThankYou" component={ThankYou} />
    </Stack.Navigator>
  );
};

export default CartStack;
