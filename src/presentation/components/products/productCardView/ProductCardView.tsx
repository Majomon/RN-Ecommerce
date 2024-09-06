import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styleProductCard} from './ProductCardView.style';

export const ProductCardView = () => {
  return (
    <Pressable onPress={() => {}}>
      <View style={styleProductCard.container}></View>
    </Pressable>
  );
};
