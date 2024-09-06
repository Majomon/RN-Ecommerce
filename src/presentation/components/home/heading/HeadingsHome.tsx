import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {MyIcon} from '../../ui/MyIcon';
import {COLORS} from '../../../../config/theme';
import {styleHeading} from './HeadingsHome.style';

export const HeadingsHome = () => {
  return (
    <View style={styleHeading.container}>
      <View style={styleHeading.header}>
        <Text style={styleHeading.headerTitle}>New Rivals</Text>
        <Pressable>
          <MyIcon name="logo-windows" size={24} color={COLORS.primary} />
        </Pressable>
      </View>
    </View>
  );
};
