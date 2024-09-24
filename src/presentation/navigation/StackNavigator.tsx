import {createStackNavigator} from '@react-navigation/stack';
import {CartScreen} from '../screens/cart/CartScreen';
import {ProductDetailScreen} from '../screens/product/ProductDetail';
import {BottomTabNavigator} from './BottomTabNavigator';

export type RootStackParams = {
  BottomTabNavigator: undefined;
  CartScreen: undefined;
  DetailsScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="DetailsScreen" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};
