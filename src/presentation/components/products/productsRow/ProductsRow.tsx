import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {COLORS, SIZES} from '../../../../config/theme';
import {useFetch} from '../../../hooks/useFetch';
import {ProductCardView} from '../productCardView/ProductCardView';
import {styleProductsRow} from './ProductsRow.style';

export const ProductsRow = () => {
  const {data, isLoading, error} = useFetch();
  
  return (
    <View style={styleProductsRow.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          horizontal
          data={data}
          keyExtractor={item => item._id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{columnGap: SIZES.medium}}
          renderItem={({item}) => <ProductCardView item={item}/>}
        />
      )}
    </View>
  );
};
