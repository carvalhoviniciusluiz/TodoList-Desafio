import React from 'react';
import { getTodoList } from '../../services/TodoList.service';
import { TodoItem } from '../../types/TodoItem';
import Checkbox from '../Checkbox';

import {
  Section,
  Title,
  NewTodo,
  ToggleAll,
  ContentWrap,
  DotoList,
  Item,
  TextItem,
  Destroy,
  Footer,
} from './styles';

const TodoList: React.FC = () => {
  const [todoList, setTodoList] = React.useState<TodoItem[]>([])

  React.useEffect(() => {
    (async () => {
      const response = await getTodoList();
      setTodoList(response);
    })();
  }, []);

  return (
    <Section>
      <Title>todos ;P</Title>

      <ToggleAll />
      <NewTodo placeholder="O que precisa ser feito?" />

      <ContentWrap>
        <DotoList>
          {todoList.map(todoItem => (
            <Item key={todoItem.id}>
              <Checkbox id={todoItem.id} />
              <TextItem>{todoItem.description}</TextItem>
              <Destroy>&#65794;</Destroy>
            </Item>
          ))}
        </DotoList>
      </ContentWrap>

      <Footer />
    </Section>
  );
}

export default TodoList;
