import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

export const CarouselComponent = () => {
  const width = Dimensions.get('window').width;
  const slides = [
    'https://www.parati.com.ar/wp-content/uploads/2022/10/ALE_3255-749x561.jpg.webp',
    'https://bucket.somosohlala.com.ar/s3fs-public/styles/internal_990/public/2022-08/15.png.webp',
    'https://beca.pe/wp-content/uploads/2023/12/d195186plex-1080x675.webp',
  ];

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        loop
        autoPlay
        defaultIndex={1}
        width={width}
        height={width / 2}
        pagingEnabled
        snapEnabled
        data={slides}
        scrollAnimationDuration={3000}
        /*   onSnapToItem={index => {
          setActiveIndex(index);
        }} */
        renderItem={({item, index}) => (
          <View
            key={index}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: item}}
              width={width * 0.9}
              height={width / 2}
              style={{borderRadius: 15, paddingTop: 15}}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
