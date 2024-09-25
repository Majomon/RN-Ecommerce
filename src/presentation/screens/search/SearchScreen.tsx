import axios from 'axios';
import React, {useState} from 'react';
import {FlatList, Image, Pressable, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {COLORS, SIZES} from '../../../config/theme';
import {Item} from '../../../interfaces/item.interface';
import {SearchTitle} from '../../components/products/searchTitle/SearchTitle';
import {MyIcon} from '../../components/ui/MyIcon';
import {styleSearch} from './Search.style';

export const SearchScreen = () => {
  const [searchKey, setSearchKey] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Item[]>([]);

  const handlePress = async () => {
    try {
      const response = await axios.get(
        `http://192.168.0.6:3000/api/products/search/${searchKey}`,
      );
      setSearchResults(response.data);
    } catch (error) {
      console.log('Error al buscar los items', error);
    }
  };

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
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="What area you looking for"
          />
        </View>
        <View>
          <Pressable
            style={styleSearch.searchBtn}
            onPress={() => handlePress()}>
            <MyIcon name="search" size={24} color={COLORS.offwhite} />
          </Pressable>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            source={require('../../../assets/imageSearch.png')}
            style={styleSearch.searchImage}
            width={400}
            height={600}
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={item => item._id}
          renderItem={({item}) => <SearchTitle item={item} />}
          style={{marginHorizontal: 12}}
        />
      )}
    </View>
  );
};
