import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../helpers/colors';
import {Bullet} from './Bullet';

interface IItemProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export const Item: React.FC<IItemProps> = ({
  onToggle,
  onDelete,
  completed,
  title,
}) => (
  <View style={styles.item}>
    <Bullet completed={completed} onPress={onToggle} />
    <Text style={[styles.title, completed && styles.completed]}>{title}</Text>
    <Text onPress={onDelete}>X</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    color: colors.indigo,
    marginHorizontal: 5,
  },
  completed: {
    textDecorationLine: 'line-through',
  },
});
