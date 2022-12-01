import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import {colors} from '../helpers/colors';

interface ITitleProps {
  onPress?: () => void;
  children?: React.ReactNode;
}

export const Title: React.FC<ITitleProps> = ({children, onPress}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.wrapper}>
      <Text style={styles.title}>{children}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: colors.blue,
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
  },
  title: {
    color: colors.white,
    fontSize: 20,
  },
});
