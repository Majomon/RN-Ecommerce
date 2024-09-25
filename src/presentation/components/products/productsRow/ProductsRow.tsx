import React from 'react';
import {FlatList, View} from 'react-native';
import {SIZES} from '../../../../config/theme';
import {useFetch} from '../../../hooks/useFetch';
import {ProductCardView} from '../productCardView/ProductCardView';
import {styleProductsRow} from './ProductsRow.style';

export const ProductsRow = () => {
  const {data, isLoading, error} = useFetch();
  const products = [1, 2, 3, 4];
  return (
    <View style={styleProductsRow.container}>
      <FlatList
        horizontal
        data={data}
        contentContainerStyle={{columnGap: SIZES.medium}}
        renderItem={({item}) => <ProductCardView />}
      />
    </View>
  );
};
