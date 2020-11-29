import React from 'react';
import Home from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import Feedback from '../screens/Feedback';
import About from '../screens/About';
import Support from '../screens/Support';
import ServiceDetail from '../screens/ServiceDetail';
import Notifications from '../screens/Notifications';
import Orders from '../screens/Orders';
import TrackOrder from '../screens/TrackOrder';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="TrackOrder" component={TrackOrder} />
    </Stack.Navigator>
  );
};

export default HomeStack;
