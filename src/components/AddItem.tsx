import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {observer} from 'mobx-react-lite';

import {colors} from '../helpers/colors';
import {useStores} from '../hooks/useStores';

export const AddItem = observer(() => {
  const {todoListStore} = useStores();
  const [isAdding, setAdding] = useState(false);
  const [title, setTitle] = useState('');

  const toggleAdding = () => setAdding(!isAdding);
  const handleOnAdd = () => {
    if (title) {
      todoListStore.addTodo(title);
      setTitle('');
    } else {
      toggleAdding();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.inner}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={toggleAdding}
          disabled={isAdding}>
          <View style={styles.item}>
            {isAdding ? (
              <TextInput
                style={styles.text}
                autoFocus
                value={title}
                onChangeText={setTitle}
                onBlur={toggleAdding}
                onSubmitEditing={handleOnAdd}
                blurOnSubmit={false}
              />
            ) : (
              <Text style={styles.text}>Add a new task</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.indigo,
  },
  inner: {
    margin: 10,
  },
  item: {
    padding: 15,
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
  },
  text: {
    color: colors.indigo,
  },
});
