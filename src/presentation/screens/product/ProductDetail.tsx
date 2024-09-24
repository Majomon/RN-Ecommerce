import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {stylesDetail} from './Detail.style';
import {MyIcon} from '../../components/ui/MyIcon';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';
import {COLORS} from '../../../config/theme';

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

export const ProductDetailScreen = ({navigation}: Props) => {
  const [count, setCount] = useState(1);
  return (
    <View style={stylesDetail.container}>
      <View style={stylesDetail.upperRow}>
        <Pressable onPress={() => navigation.goBack()}>
          <MyIcon name="chevron-back-circle" size={30} />
        </Pressable>
        <Pressable onPress={() => navigation.goBack()}>
          <MyIcon name="heart" size={30} color={COLORS.primary} />
        </Pressable>
      </View>
      <Image
        source={{
          uri: 'https://beca.pe/wp-content/uploads/2023/12/d195186plex-1080x675.webp',
        }}
        style={stylesDetail.image}
      />
      <View style={stylesDetail.details}>
        <View style={stylesDetail.titleRow}>
          <Text style={stylesDetail.title}>Product</Text>
          <View style={stylesDetail.priceWrapper}>
            <Text style={stylesDetail.price}>$620.4</Text>
          </View>
        </View>
        <View style={stylesDetail.ratingRow}>
          <View style={stylesDetail.rating}>
            {[1, 2, 3, 4, 5].map(index => (
              <MyIcon key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={stylesDetail.ratingText}>(4.9)</Text>
          </View>
          <View style={stylesDetail.rating}>
            <Pressable onPress={() => {}}>
              <MyIcon name="add-circle-outline" size={20} />
            </Pressable>
            <Text style={stylesDetail.ratingText}> {count} </Text>
            <Pressable onPress={() => {}}>
              <MyIcon name="remove-circle-outline" size={20} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
