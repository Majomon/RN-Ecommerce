import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styleProductCard} from './ProductCardView.style';
import {MyIcon} from '../../ui/MyIcon';
import {COLORS} from '../../../../config/theme';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigation/StackNavigator';
import {Item} from '../../../../interfaces/item.interface';

interface Props {
  item: Item;
}

export const ProductCardView = ({item}: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const slides = [
    'https://www.parati.com.ar/wp-content/uploads/2022/10/ALE_3255-749x561.jpg.webp',
    'https://bucket.somosohlala.com.ar/s3fs-public/styles/internal_990/public/2022-08/15.png.webp',
    'https://beca.pe/wp-content/uploads/2023/12/d195186plex-1080x675.webp',
  ];

  return (
    <Pressable onPress={() => navigation.navigate('DetailsScreen', {item})}>
      <View style={styleProductCard.container}>
        <View style={styleProductCard.imageContainer}>
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={styleProductCard.image}
          />
        </View>
        <View style={styleProductCard.details}>
          <Text style={styleProductCard.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styleProductCard.supplier} numberOfLines={1}>
            {item.supplier}
          </Text>
          <Text style={styleProductCard.price} numberOfLines={1}>
            {item.price}
          </Text>
        </View>
        <Pressable style={styleProductCard.addBtn}>
          <MyIcon name="add-circle" size={35} color={COLORS.primary} />
        </Pressable>
      </View>
    </Pressable>
  );
};
