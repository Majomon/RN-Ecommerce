import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/home/HomeScreen';
import {SearchScreen} from '../screens/search/SearchScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {MyIcon} from '../components/ui/MyIcon';
import {COLORS} from '../../config/theme';

export type RootBottomTabParams = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<RootBottomTabParams>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        /* Oculta la barra de pestañar si el teclado esta activo */
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          // height: 50,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MyIcon
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MyIcon
                name={'search-sharp'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MyIcon
                name={focused ? 'person' : 'person-outline'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

// const screenOptions = {
//   tabBarShowLabel: false,
//   /* Oculta la barra de pestañar si el teclado esta activo */
//   tabBarHideOnKeyboard: true,
//   headerShown: false,
//   tabBarStyle: {
//     position: 'absolute' as const, // especifica el tipo correcto para 'position'
//     bottom: 0,
//     right: 0,
//     left: 0,
//     elevation: 0,
//     height: 70,
//   },
// };
