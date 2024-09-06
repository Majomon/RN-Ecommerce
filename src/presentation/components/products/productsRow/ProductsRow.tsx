import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {SIZES} from '../../../../config/theme';
import {ProductCardView} from '../productCardView/ProductCardView';

export const ProductsRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={{marginTop: SIZES.medium, marginBottom: 120}}>
      <FlatList
        horizontal
        data={products}
        contentContainerStyle={{columnGap: SIZES.medium}}
        renderItem={({item}) => <ProductCardView />}
      />
    </View>
  );
};
