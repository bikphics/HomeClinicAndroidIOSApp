import React from 'react';
import Home from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import Feedback from '../screens/Feedback';
import About from '../screens/About';
import Support from '../screens/Support';
import Notifications from '../screens/Notifications';
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
    </Stack.Navigator>
  );
};

export default HomeStack;
