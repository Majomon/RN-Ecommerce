import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styleProductCard} from './ProductCardView.style';

export const ProductCardView = () => {
  const slides = [
    'https://www.parati.com.ar/wp-content/uploads/2022/10/ALE_3255-749x561.jpg.webp',
    'https://bucket.somosohlala.com.ar/s3fs-public/styles/internal_990/public/2022-08/15.png.webp',
    'https://beca.pe/wp-content/uploads/2023/12/d195186plex-1080x675.webp',
  ];
  return (
    <Pressable onPress={() => {}}>
      <View style={styleProductCard.container}>
        <View style={styleProductCard.imageContainer}>
          <Image
            source={{
              uri: 'https://beca.pe/wp-content/uploads/2023/12/d195186plex-1080x675.webp',
            }}
            style={}
          />
        </View>
      </View>
    </Pressable>
  );
};
