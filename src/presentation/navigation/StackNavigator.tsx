import {createStackNavigator} from '@react-navigation/stack';
import {CartScreen} from '../screens/cart/CartScreen';
import {BottomTabNavigator} from './BottomTabNavigator';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};
