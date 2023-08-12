import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Request, Response } from 'express';

@ApiBearerAuth()
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(@Res() res: Response) {
    const docs = await this.productsService.findAll();
    const length = docs.length;

    res.append('X-Total-Count', length.toString());
    res.append('Access-Control-Expose-Headers', 'X-Total-Count');

    return res.status(200).json(docs);
  }

  @Get(':id')
  async findOne(@Param('id') id: Types.ObjectId | string) {
    return await this.productsService.findOne(id);
  }

  @Post()
  async create(@Body() body: CreateProductDto, @Req() req: Request) {
    if (!req['isAdmin']) {
      throw new UnauthorizedException();
    }
    return await this.productsService.create(body);
  }

  @Patch(':id')
  async update(
    @Param('id') id: Types.ObjectId | string,
    @Body() body: UpdateProductDto,
    @Req() req: Request,
  ) {
    if (!req['isAdmin']) {
      throw new UnauthorizedException();
    }
    return await this.productsService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: Types.ObjectId | string, @Req() req: Request) {
    if (!req['isAdmin']) {
      throw new UnauthorizedException();
    }

    return await this.productsService.remove(id);
  }
}
