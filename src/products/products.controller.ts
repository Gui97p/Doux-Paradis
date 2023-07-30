import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Types.ObjectId | string) {
    return await this.productsService.findOne(id);
  }

  @Post()
  async create(@Body() body: CreateProductDto) {
    return await this.productsService.create(body);
  }

  @Patch(':id')
  async update(
    @Param('id') id: Types.ObjectId | string,
    @Body() body: UpdateProductDto,
  ) {
    return await this.productsService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: Types.ObjectId | string) {
    return await this.productsService.remove(id);
  }
}
