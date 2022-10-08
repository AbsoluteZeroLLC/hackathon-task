/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from 'components/BottomNavigation';
import Home from 'screens/Home';
import React from 'react';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={BottomNavigation}
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};
