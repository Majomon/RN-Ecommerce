import {StyleSheet} from 'react-native';
import {SIZES} from '../../../../config/theme';

export const styleWelcome = StyleSheet.create({
  container: {
    width: '100%',
  },
  welcomeTxt: {
    fontWeight: 'bold',
    fontSize: SIZES.xxLarge - 5,
    marginTop: SIZES.xSmall,
  },
});
