import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigation } from './TabNavigation';
import Receive from 'screens/Receive';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Base"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Base" component={TabNavigation} />
      <Stack.Screen name="Receive" component={Receive} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
