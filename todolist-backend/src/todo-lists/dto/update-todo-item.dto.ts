import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateTodoItemDto {
  @IsNotEmpty()
  @IsBoolean()
  done: boolean;
}
