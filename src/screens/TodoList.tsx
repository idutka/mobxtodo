import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {observer} from 'mobx-react-lite';

import {colors} from '../helpers/colors';
import {AddItem, List} from '../components';
import {useStores} from '../hooks/useStores';

const TodoList = observer(() => {
  const {todoListStore} = useStores();

  useEffect(() => {
    todoListStore.fetchTodos();
  }, [todoListStore]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.content}
        contentInsetAdjustmentBehavior="automatic">
        <List
          name="Tasks"
          items={todoListStore.todos}
          onDelete={todoListStore.deleteTodo}
          onToggle={todoListStore.toggleTodo}
        />
        <List
          collapsed
          name="Completed"
          items={todoListStore.completed}
          onDelete={todoListStore.deleteTodo}
          onToggle={todoListStore.toggleTodo}
        />
      </ScrollView>
      <AddItem />
      {todoListStore.isLoading && (
        <ActivityIndicator style={styles.spinner} size="large" />
      )}
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.indigo,
  },
  content: {
    flex: 1,
  },
  spinner: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default TodoList;
