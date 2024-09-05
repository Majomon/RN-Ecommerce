import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styleSearch} from './Search.style';
import {MyIcon} from '../../components/ui/MyIcon';
import {COLORS, SIZES} from '../../../config/theme';
import {RootStackParams} from '../../navigation/BottomTabNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';

export const SearchScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View>
      <View style={styleSearch.searchContainer}>
        <Pressable>
          <MyIcon
            name="camera-outline"
            size={SIZES.xLarge}
            style={styleSearch.cameraIcon}
          />
        </Pressable>
        <View style={styleSearch.searchWrapper}>
          <TextInput
            style={styleSearch.searchInput}
            value=""
            onPressIn={() => navigation.navigate('SearchScreen')}
            placeholder="What area you looking for"
          />
        </View>
        <View>
          <Pressable style={styleSearch.searchBtn}>
            <MyIcon name="search" size={24} color={COLORS.offwhite} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
