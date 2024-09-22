import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tiki_Ok from './Javascript/Tiki_Ok'

const Stack = createStackNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tiki_Ok">
        <Stack.Screen name="Tiki_Ok" component={Tiki_Ok} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;
