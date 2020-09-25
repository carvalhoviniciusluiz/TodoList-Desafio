import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTodoItemDto } from './dto/create-todo-item.dto';
import { UpdateTodoItemDto } from './dto/update-todo-item.dto';
import { TodoListsService } from './todo-lists.service';

@Controller('todo-lists')
export class TodoListsController {
  constructor(private todoListsService: TodoListsService) {}

  @Get()
  getTodoLists() {
    return this.todoListsService.getTodoLists();
  }

  @Post()
  async createTodoItem(
    @Body(ValidationPipe) createTodoItemDto: CreateTodoItemDto,
  ) {
    return this.todoListsService.createTodoItem(createTodoItemDto);
  }

  @Patch('/:id')
  updateTodoItem(
    @Param('id', ValidationPipe) id: string,
    @Body(ValidationPipe) updateTodoItemDto: UpdateTodoItemDto,
  ) {
    return this.todoListsService.updateTodoItem(id, updateTodoItemDto);
  }
}
