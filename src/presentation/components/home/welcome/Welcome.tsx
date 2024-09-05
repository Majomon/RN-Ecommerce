import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styleWelcome} from './Welcome.styles';
import {COLORS, SIZES} from '../../../../config/theme';
import {MyIcon} from '../../ui/MyIcon';
import {TextInput} from 'react-native-gesture-handler';
import {RootStackParams} from '../../../navigation/BottomTabNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

export const Welcome = () => {
  /*   const navigation = useNavigation<StackNavigationProp<RootStackParams>>(); */
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View>
      <View style={styleWelcome.container}>
        <Text
          style={[
            styleWelcome.welcomeTxt,
            {color: COLORS.black, marginTop: SIZES.xSmall},
          ]}>
          Fint the moest
        </Text>
        <Text style={[styleWelcome.welcomeTxt, {color: COLORS.primary}]}>
          Luxurious Furniture
        </Text>
      </View>
      <View style={styleWelcome.searchContainer}>
        <Pressable>
          <MyIcon name="search" size={24} style={styleWelcome.searchIcon} />
        </Pressable>
        <View style={styleWelcome.searchWrapper}>
          <TextInput
            style={styleWelcome.searchInput}
            value=""
            onPressIn={() => navigation.navigate('SearchScreen')}
            placeholder="What area you looking for"
          />
        </View>
        <View>
          <Pressable style={styleWelcome.searchBtn}>
            <MyIcon name="camera" size={SIZES.xLarge} color={COLORS.offwhite} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
