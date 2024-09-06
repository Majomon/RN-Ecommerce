import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../../config/theme';

export const styleHeading = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    // marginBottom: -8,
    marginHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontWeight: 'semibold',
    fontSize: SIZES.xLarge - 2,
  },
});
