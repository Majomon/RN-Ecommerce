import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {stylesHome} from './Home.style';
import {MyIcon} from '../../components/ui/MyIcon';
import {Welcome} from '../../components';
import { CarouselComponent } from '../../components/ui/Carousel';
import { HeadingsHome } from '../../components/home/heading/HeadingsHome';

export const HomeScreen = () => {
  return (
    <View>
      <View style={stylesHome.appBarWrapper}>
        <View style={stylesHome.appBar}>
          <MyIcon name="location-outline" size={24} />
          <Text style={stylesHome.location}>Shangai China</Text>
          <View style={{alignItems: 'flex-end'}}>
            <View style={stylesHome.cartCount}>
              <Text style={stylesHome.cartNumber}> 8 </Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <MyIcon name="bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <CarouselComponent />
        <HeadingsHome/>
      </ScrollView>
    </View>
  );
};
