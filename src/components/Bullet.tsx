import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {colors} from '../helpers/colors';

interface IBulletProps {
  completed?: boolean;
  onPress: () => void;
}

export const Bullet: React.FC<IBulletProps> = ({completed, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.bullet}>
      {completed && <View style={styles.mark} />}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  bullet: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  mark: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: colors.yellow,
  },
});
