import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../../config/theme';

export const styleProductCard = StyleSheet.create({
  container: {
    width: 160,
    height: 220,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
  imageContainer: {
    flex: 1,
    width: 150,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: 'hidden',
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontWeight: 'bold',
    fontSize: SIZES.large,
    marginBottom: 2,
    color: COLORS.black,
  },
  supplier: {
    fontWeight: 'regular',
    fontSize: SIZES.small,
    marginBottom: 2,
    color: COLORS.gray,
  },
  price: {
    fontWeight: 'bold',
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
  addBtn: {
    position: 'absolute',
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
});
