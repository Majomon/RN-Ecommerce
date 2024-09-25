import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {COLORS} from '../../../../config/theme';
import {RootStackParams} from '../../../navigation/StackNavigator';
import {MyIcon} from '../../ui/MyIcon';
import {styleHeading} from './HeadingsHome.style';

export const HeadingsHome = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View style={styleHeading.container}>
      <View style={styleHeading.header}>
        <Text style={styleHeading.headerTitle}>New Rivals</Text>
        <Pressable onPress={() => navigation.navigate('ProductListScreen')}>
          <MyIcon name="logo-windows" size={24} color={COLORS.primary} />
        </Pressable>
      </View>
    </View>
  );
};
