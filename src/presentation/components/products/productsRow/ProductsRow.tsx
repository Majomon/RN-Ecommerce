import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {SIZES} from '../../../../config/theme';
import {ProductCardView} from '../productCardView/ProductCardView';
import {styleProductsRow} from './ProductsRow.style';

export const ProductsRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={styleProductsRow.container}>
      <FlatList
        horizontal
        data={products}
        contentContainerStyle={{columnGap: SIZES.medium}}
        renderItem={({item}) => <ProductCardView />}
      />
    </View>
  );
};
