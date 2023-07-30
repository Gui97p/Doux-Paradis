import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3)
  @ApiProperty({
    description: "The user's name",
  })
  name: string;

  @IsString()
  @Length(8)
  @ApiProperty({
    description: "The user's password",
  })
  password: string;

  @IsString()
  @IsEmail()
  @ApiProperty({
    description: "The users's email, it's unique",
  })
  email: string;
}
