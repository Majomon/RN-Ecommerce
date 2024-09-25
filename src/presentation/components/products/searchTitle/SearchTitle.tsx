import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styleSearchTitle} from './SearchTitle.style';
import {Item} from '../../../../interfaces/item.interface';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigation/StackNavigator';

interface Props {
  item: Item;
}

export const SearchTitle = ({item}: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View>
      <Pressable
        style={styleSearchTitle.container}
        onPress={() => navigation.navigate('DetailsScreen', {item})}>
        <View style={styleSearchTitle.image}>
          <Image
            source={{uri: item.imageUrl}}
            style={styleSearchTitle.productImg}
          />
        </View>
        <View style={styleSearchTitle.textContainer}>
          <Text style={styleSearchTitle.productTitle}>{item.title}</Text>
          <Text style={styleSearchTitle.supplier}>{item.supplier}</Text>
          <Text style={styleSearchTitle.supplier}>{item.price}</Text>
        </View>
      </Pressable>
    </View>
  );
};
