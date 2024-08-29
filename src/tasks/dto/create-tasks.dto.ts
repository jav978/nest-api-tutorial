import { IsString, IsBoolean, IsNumber, MinLength } from 'class-validator';
import { ApiProperty, ApiTags } from '@nestjs/swagger';


export class CreateTasksDto {
  id: number;

  @ApiProperty({
    description: 'The name of the tasks',
    minLength: 4,
    example: 'taks 1',
  })
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty({
    description: 'The description of the tasks',
    minLength: 4,
    example: 'taks 1 read a book',
  })
  @IsString()
  @MinLength(1)
  description?: string;

  @ApiProperty({
    description: 'The done of the tasks',    
    example: 'is done',
  })
  @IsBoolean()
  done: boolean;
}
