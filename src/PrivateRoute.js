import React from 'react';
import HomeStack from './stacks/HomeStack';
import ProfileStack from './stacks/ProfileStack';
import SearchStack from './stacks/SearchStack';
import CartStack from './stacks/CartStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {COLORS} from './config/Colors';
import CategoryStack from './stacks/CategoryStack';
const Tab = createMaterialBottomTabNavigator();

const PrivateRoute = () => {
  return (
    <Tab.Navigator shifting={true}>
      <Tab.Screen
        name="HomeTab"
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={24} />
          ),
          tabBarColor: COLORS.LIGHT,
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="SearchTab"
        options={{
          tabBarLabel: 'SEARCH',
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" color={color} size={24} />
          ),
          tabBarColor: COLORS.LIGHTER,
        }}
        component={SearchStack}
      />
      <Tab.Screen
        name="CategoryTab"
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({color}) => (
            <AntDesign name="appstore-o" color={color} size={24} />
          ),
          tabBarColor: COLORS.SOFTER,
        }}
        component={CategoryStack}
      />
      <Tab.Screen
        name="ProfileTab"
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({color}) => (
            <AntDesign name="user" color={color} size={24} />
          ),
          tabBarColor: COLORS.SOFTER,
        }}
        component={ProfileStack}
      />
      <Tab.Screen
        name="CartTab"
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <AntDesign name="shoppingcart" color={color} size={24} />
          ),
          tabBarColor: COLORS.SOFTER,
        }}
        component={CartStack}
      />
    </Tab.Navigator>
  );
};

export default PrivateRoute;
