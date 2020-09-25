import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TodoListsModule } from './todo-lists/todo-lists.module';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'todolist-develop',
  entities: [`${__dirname}/**/*.entity.{js,ts}`],
  synchronize: true,
}

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TodoListsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
