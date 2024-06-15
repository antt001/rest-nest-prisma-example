import { ApiProperty } from '@nestjs/swagger';

export class Employee {
  @ApiProperty({ example: 1, description: 'Autogenerated Employee ID' })
  id: number;

  @ApiProperty({ example: 'John', description: 'Employee firstname' })
  firstname: string;

  @ApiProperty({ example: 'Doe', description: 'Employee lastname' })
  lastname: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'Employee email'})
  email: string;
}