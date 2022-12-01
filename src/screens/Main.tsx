import React from 'react';
import {observer} from 'mobx-react-lite';

import {useStores} from '../hooks/useStores';
import TodoList from './TodoList';
import Login from './Login';

const Main = observer(() => {
  const {authStore} = useStores();
  // todo persist user

  return authStore.isAuthorized ? <TodoList /> : <Login />;
});

export default Main;
