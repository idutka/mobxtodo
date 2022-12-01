import {IUser} from '../stores/Auth';
import {ITodo} from '../stores/TodoList';

const URL = 'https://jsonplaceholder.typicode.com/todos';

export async function api(request: RequestInfo) {
  const response = await fetch(request);
  return await response.json();
}

export const getTodos = (): Promise<ITodo[]> => api(URL);

export const signIn = (name: string): Promise<IUser> => {
  const user = {
    id: `${Date.now()}`,
    name,
  };
  return new Promise(resolve => {
    setTimeout(() => resolve(user), 1000);
  });
};
