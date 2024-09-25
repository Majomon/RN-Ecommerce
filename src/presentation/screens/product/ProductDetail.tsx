import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {stylesDetail} from './Detail.style';
import {MyIcon} from '../../components/ui/MyIcon';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';
import {COLORS, SIZES} from '../../../config/theme';

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

export const ProductDetailScreen = ({navigation, route}: Props) => {
  const {item} = route.params;
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

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
          uri: item.imageUrl,
        }}
        style={stylesDetail.image}
      />
      <View style={stylesDetail.details}>
        <View style={stylesDetail.titleRow}>
          <Text style={stylesDetail.title}>{item.title}</Text>
          <View style={stylesDetail.priceWrapper}>
            <Text style={stylesDetail.price}>{item.price}</Text>
          </View>
        </View>
        <View style={stylesDetail.ratingRow}>
          <View style={stylesDetail.rating}>
            {[1, 2, 3, 4, 5].map(index => (
              <MyIcon key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={stylesDetail.ratingText}> (4.9)</Text>
          </View>
          <View style={stylesDetail.rating}>
            <Pressable onPress={() => increment()}>
              <MyIcon name="add-circle-outline" size={24} />
            </Pressable>
            <Text style={stylesDetail.ratingText}>{count}</Text>
            <Pressable onPress={() => decrement()}>
              <MyIcon name="remove-circle-outline" size={24} />
            </Pressable>
          </View>
        </View>
        <View style={stylesDetail.descriptionWrapper}>
          <Text style={stylesDetail.description}>Description</Text>
          <Text style={stylesDetail.descText}>{item.description}</Text>
        </View>
        <View style={{marginBottom: SIZES.small}}>
          <View style={stylesDetail.location}>
            <View style={{flexDirection: 'row'}}>
              <MyIcon name="locate-outline" size={20} />
              <Text> {item.product_location}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <MyIcon name="car-outline" size={20} />
              <Text> Free Delivery </Text>
            </View>
          </View>
        </View>
        <View style={stylesDetail.cartRow}>
          <Pressable onPress={() => {}} style={stylesDetail.cartBtn}>
            <Text style={stylesDetail.cartTitle}>BUY NOW </Text>
          </Pressable>
          <Pressable onPress={() => {}} style={stylesDetail.addToCart}>
            <MyIcon name="bag" color={COLORS.lightWhite} size={22} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
