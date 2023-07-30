import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3)
  name: string;

  @IsString()
  @Length(8)
  password: string;

  @IsString()
  @IsEmail()
  email: string;
}
