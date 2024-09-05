import {StyleProp, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

export const MyIcon = ({name, size = 30, color = 'black', style}: Props) => {
  return <Icon name={name} size={size} color={color} style={style} />;
};
