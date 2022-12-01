import {createContext} from 'react';
import {TodoListStore} from '../stores/TodoList';
import {AuthStore} from '../stores/Auth';

export const storesContext = createContext({
  todoListStore: new TodoListStore(),
  authStore: new AuthStore(),
});
