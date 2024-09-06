import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../../config/theme';

export const styleProductCard = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
});
