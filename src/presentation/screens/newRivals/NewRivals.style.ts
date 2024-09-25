import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../config/theme';

export const stylesNewRivals = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    width: SIZES.width - 50,
    marginHorizontal: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    top: SIZES.large,
    zIndex: 9999,
  },
  heading: {
    fontWeight: 'semibold',
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    marginLeft: 5,
  },
});
