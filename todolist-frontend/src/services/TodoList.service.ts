import { TodoItem } from '../types/TodoItem';
import api from '../utils/api';

export async function getTodoList() {
  const response = await api.get<TodoItem[]>(`todo-lists`);
  return response.data;
}

export async function deleteTodoList(id: string) {
  const response = await api.delete(`todo-lists/${id}`);
  return response.data;
}
