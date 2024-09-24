import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Pressable, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {COLORS, SIZES} from '../../../config/theme';
import {MyIcon} from '../../components/ui/MyIcon';
import {RootBottomTabParams} from '../../navigation/BottomTabNavigator';
import {styleSearch} from './Search.style';

export const SearchScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootBottomTabParams>>();

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
