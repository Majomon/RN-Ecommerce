import { createStackNavigator } from '@react-navigation/stack';
import { Item } from '../../interfaces/item.interface';
import { CartScreen } from '../screens/cart/CartScreen';
import { NewRivalsScreen } from '../screens/newRivals/NewRivalsScreen';
import { ProductDetailScreen } from '../screens/product/ProductDetail';
import { BottomTabNavigator } from './BottomTabNavigator';

export type RootStackParams = {
  BottomTabNavigator: undefined;
  CartScreen: undefined;
  DetailsScreen: {item: Item};
  ProductListScreen: undefined
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="DetailsScreen" component={ProductDetailScreen} />
      <Stack.Screen name="ProductListScreen" component={NewRivalsScreen} />
    </Stack.Navigator>
  );
};
