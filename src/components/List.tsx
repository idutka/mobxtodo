import React, {useState} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';

import {ITodo} from '../stores/TodoList';
import {Item} from './Item';
import {Title} from './Title';

interface IListProps {
  name: string;
  items: ITodo[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  collapsed?: boolean;
}

export const List: React.FC<IListProps> = observer(
  ({name, items, collapsed = false, onDelete, onToggle}) => {
    const [isCollapsed, setCollapsed] = useState(collapsed);
    const toggleList = () => setCollapsed(!isCollapsed);

    return (
      <View>
        <Title onPress={toggleList}>{`${name} : ${items.length}`}</Title>
        {!isCollapsed &&
          items.map(({id, title, completed}: ITodo) => (
            <Item
              key={id}
              title={title}
              onDelete={() => onDelete(id)}
              onToggle={() => onToggle(id)}
              completed={completed}
            />
          ))}
      </View>
    );
  },
);
