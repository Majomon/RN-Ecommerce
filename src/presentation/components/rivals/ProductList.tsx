import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useFetch} from '../../hooks/useFetch';
import {COLORS, SIZES} from '../../../config/theme';
import {stylesProductList} from './ProductList.style';
import {ProductCardView} from '../products/productCardView/ProductCardView';

export const ProductList = () => {
  const {data, isLoading, error} = useFetch();

  if (isLoading) {
    return (
      <View style={stylesProductList.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }
  return (
    <View style={stylesProductList.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={item => <ProductCardView item={item.item} />}
        contentContainerStyle={stylesProductList.container}
        ItemSeparatorComponent={()=><View style={stylesProductList.separator}/>}
      />
    </View>
  );
};
