import React from 'react';
import {Text, View} from 'react-native';
import {styleWelcome} from './Welcome.styles';

export const Welcome = () => {
  return (
    <View style={styleWelcome.container}>
      <Text style={styleWelcome.welcomeTxt}>Fint the moest</Text>
      <Text style={styleWelcome.welcomeTxt}>Luxurius Furniture</Text>
    </View>
  );
};
