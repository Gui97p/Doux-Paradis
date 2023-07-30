import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Length } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(3)
  @ApiProperty({
    description: "The product's name",
  })
  name: string;

  @IsNumber()
  @ApiProperty({
    description: "The product's price",
  })
  price: number;

  @IsString()
  @ApiProperty({
    description: "The product's image name",
  })
  image: string;
}
