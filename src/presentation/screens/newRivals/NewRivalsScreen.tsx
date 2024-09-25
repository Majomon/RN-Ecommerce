import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {stylesNewRivals} from './NewRivals.style';
import {MyIcon} from '../../components/ui/MyIcon';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';
import {COLORS} from '../../../config/theme';
import { ProductList } from '../../components/rivals/ProductList';

export const NewRivalsScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View style={stylesNewRivals.container}>
      <View style={stylesNewRivals.wrapper}>
        <View style={stylesNewRivals.upperRow}>
          <Pressable onPress={() => navigation.goBack()}>
            <MyIcon
              name="chevron-back-circle"
              size={30}
              color={COLORS.lightWhite}
            />
          </Pressable>
          <Text style={stylesNewRivals.heading}> Products</Text>
        </View>
        <ProductList/>
      </View>
    </View>
  );
};
