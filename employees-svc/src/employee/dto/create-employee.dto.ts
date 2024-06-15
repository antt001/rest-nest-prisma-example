import { IsNotEmpty, IsEmail, IsString } from 'class-validator'

export class CreateEmployeeDto {
  @IsString()
  firstname: string

  @IsString()
  lastname: string

  @IsNotEmpty()
  @IsEmail()
  email: string
}