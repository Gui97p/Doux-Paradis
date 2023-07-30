import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsEmail()
  @ApiProperty({
    description: "The user's email, an unique value",
  })
  email: string;

  @IsString()
  @Length(8)
  @ApiProperty({
    description: "The user's password, use it with security",
  })
  password: string;
}
