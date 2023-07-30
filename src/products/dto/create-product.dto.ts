import { IsNumber, IsString, Length } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(3)
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  image: string;
}
