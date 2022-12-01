import {observable, action, computed, flow, makeObservable} from 'mobx';
import {Alert, LayoutAnimation} from 'react-native';
import {getTodos} from '../helpers/api';

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export class TodoListStore {
  list: ITodo[] = [];
  isLoading: boolean = false;

  constructor() {
    makeObservable(this, {
      list: observable,
      addTodo: action,
      deleteTodo: action,
      toggleTodo: action,
      completed: computed,
      todos: computed,
      fetchTodos: flow,
    });
  }

  get completed() {
    return this.list.filter(({completed}) => completed);
  }

  get todos() {
    return this.list.filter(({completed}) => !completed);
  }

  addTodo = (title: string) => {
    LayoutAnimation.easeInEaseOut(); // todo
    this.list.push({
      id: `${Date.now()}`,
      title: title,
      completed: false,
    });
  };

  deleteTodo = (id: string) => {
    LayoutAnimation.easeInEaseOut(); // todo
    this.list = this.list.filter(item => item.id !== id);
  };

  toggleTodo = (id: string) => {
    LayoutAnimation.easeInEaseOut(); // todo
    this.list = this.list.map(item =>
      item.id === id ? {...item, completed: !item.completed} : item,
    );
  };

  *fetchTodos() {
    this.list = [];
    this.isLoading = true;
    try {
      const data: ITodo[] = yield getTodos();
      this.list = data.slice(0, 10);
    } catch (error: any) {
      Alert.alert('Something went wrong!', error.message);
    } finally {
      this.isLoading = false;
    }
  }
}
