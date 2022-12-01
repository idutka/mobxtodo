import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface IButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export const Button: React.FC<IButtonProps> = ({
  style,
  titleStyle,
  title,
  onPress,
}) => (
  <TouchableOpacity
    style={[styles.buttonContainer, style]}
    onPress={onPress}
    activeOpacity={0.8}>
    <Text style={[styles.buttonTitle, titleStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignSelf: 'center',
  },
  buttonTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});
