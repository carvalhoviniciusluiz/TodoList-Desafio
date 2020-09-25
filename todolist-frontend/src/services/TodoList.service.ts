import { TodoItem } from '../types/TodoItem';
import api from '../utils/api';

interface CreateTodoItemDto {
  description: string;
}

export async function getTodoList() {
  const response = await api.get<TodoItem[]>(`todo-lists`);
  return response.data;
}

export async function createTodoItem(createTodoItemDto: CreateTodoItemDto) {
  const { description } = createTodoItemDto;
  const response = await api.post<TodoItem>(`todo-lists`, { description });
  return response.data;
}

export async function deleteTodoList(id: string) {
  const response = await api.delete(`todo-lists/${id}`);
  return response.data;
}
