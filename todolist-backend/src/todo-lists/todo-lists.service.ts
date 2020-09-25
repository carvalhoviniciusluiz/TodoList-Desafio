import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoItemDto } from './dto/create-todo-item.dto';
import { UpdateTodoItemDto } from './dto/update-todo-item.dto';
import { TodoListRepository } from './todo-list.repository';

@Injectable()
export class TodoListsService {
  constructor(
    @InjectRepository(TodoListRepository)
    private todoListRepository: TodoListRepository,
  ) {}

  getTodoLists() {
    return this.todoListRepository.getTodoLists();
  }

  createTodoItem(createTodoItemDto: CreateTodoItemDto) {
    return this.todoListRepository.createTodoItem(createTodoItemDto);
  }

  async updateTodoItem(id: string, updateTodoItemDto: UpdateTodoItemDto) {
    const todo = await this.getTodoItemByIdOrFail(id);
    return this.todoListRepository.updateTodoItem(todo, updateTodoItemDto);
  }

  async deleteTodoItem(id: string) {
    const todo = await this.getTodoItemByIdOrFail(id);
    await todo.softRemove();
  }

  async getTodoItemByIdOrFail(id: string) {
    const todo = await this.todoListRepository.findOne(id);
    if (!todo) {
      throw new NotFoundException(`Todo with ID "${id}" not found`);
    }
    return todo;
  }
}
