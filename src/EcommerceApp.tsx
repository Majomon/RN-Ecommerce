import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackNavigator} from './presentation/navigation/StackNavigator';
import {BottomTabNavigator} from './presentation/navigation/BottomTabNavigator';

export const EcommerceApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
};
