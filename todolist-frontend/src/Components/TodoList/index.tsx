import React from 'react';
import {
  getTodoList,
  deleteTodoList,
  createTodoItem
} from '../../services/TodoList.service';
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
  const [newItem, setNewItem] = React.useState('')
  const [todoList, setTodoList] = React.useState<TodoItem[]>([])

  React.useEffect(() => {
    (async () => {
      const response = await getTodoList();
      setTodoList(response);
    })();
  }, []);

  async function handleRemove(id: string) {
    try {
      await deleteTodoList(id);
      setTodoList((prevState) => prevState.filter(item => item.id !== id));
    } catch (error) {
      alert('Erro!!')
    }
  }

  function handleNewItem(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setNewItem(value);
  }

  async function handleSubmit(event: React.ChangeEvent<HTMLInputElement>) {
    const description = event.currentTarget.value;
    if (!description) return;
    try {
      const response = await createTodoItem({ description });
      setTodoList((prevState) => [...prevState, response]);
      setNewItem('');
    } catch (error) {
      alert('Erro!!')
    }
  }

  return (
    <Section>
      <Title>todos ;P</Title>

      <ToggleAll />
      <NewTodo
        placeholder="O que precisa ser feito?"
        value={newItem}
        onChange={handleNewItem}
        onBlur={handleSubmit}
      />

      <ContentWrap>
        <DotoList>
          {todoList.map(todoItem => (
            <Item key={todoItem.id}>
              <Checkbox id={todoItem.id} />
              <TextItem>{todoItem.description}</TextItem>
              <Destroy onClick={() => handleRemove(todoItem.id)}>&#65794;</Destroy>
            </Item>
          ))}
        </DotoList>
      </ContentWrap>

      <Footer />
    </Section>
  );
}

export default TodoList;
