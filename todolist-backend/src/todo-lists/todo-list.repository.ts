import { EntityRepository, Repository } from 'typeorm';
import { CreateTodoItemDto } from './dto/create-todo-item.dto';
import { UpdateTodoItemDto } from './dto/update-todo-item.dto';
import { TodoItem } from './todo-item.entity';

@EntityRepository(TodoItem)
export class TodoListRepository extends Repository<TodoItem> {
  getTodoListQuery() {
    return this.createQueryBuilder('todolist');
  }

  async getTodoLists(): Promise<TodoItem[]> {
    const query = this.getTodoListQuery().orderBy({ updated_at: 'DESC' });
    return query.getMany();
  }

  async createTodoItem(
    createTodoItemDto: CreateTodoItemDto,
  ): Promise<TodoItem> {
    const { description, done } = createTodoItemDto;
    const todo = new TodoItem();
    todo.description = description;
    todo.done = done;
    await todo.save();
    return todo;
  }

  async updateTodoItem(
    target: TodoItem,
    updateTodoItemDto: UpdateTodoItemDto,
  ): Promise<TodoItem> {
    const { done } = updateTodoItemDto;
    const todo = target;
    todo.done = done;
    await todo.save();
    return todo;
  }
}
