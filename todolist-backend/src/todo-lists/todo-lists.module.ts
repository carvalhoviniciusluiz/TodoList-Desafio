import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoListsController } from './todo-lists.controller';
import { TodoListsService } from './todo-lists.service';
import { TodoListRepository } from './todo-list.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TodoListRepository])],
  controllers: [TodoListsController],
  providers: [TodoListsService],
})
export class TodoListsModule {}
