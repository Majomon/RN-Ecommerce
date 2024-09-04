import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  color?: string;
  size?: number;
}

export const MyIcon = ({name, size = 30, color = 'black'}: Props) => {
  return <Icon name={name} size={size} color={color} />;
};
