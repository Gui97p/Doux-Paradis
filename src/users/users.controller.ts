import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Types } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@Res() res: Response) {
    const docs = await this.usersService.findAll();
    const length = docs.length;

    res.append('X-Total-Count', length.toString());
    res.append('Access-Control-Expose-Headers', 'X-Total-Count');

    return res.status(200).json(docs);
  }

  @Get(':id')
  async findOne(@Param('id') id: Types.ObjectId | string) {
    return await this.usersService.findOne(id);
  }

  @Post()
  async create(@Body() body: CreateUserDto) {
    return await this.usersService.create(body);
  }

  @Patch(':id')
  async update(
    @Param('id') id: Types.ObjectId | string,
    @Body() body: UpdateUserDto,
  ) {
    return await this.usersService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: Types.ObjectId | string) {
    return await this.usersService.remove(id);
  }
}
