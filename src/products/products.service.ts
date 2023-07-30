import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model, Types } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async create(body: CreateProductDto) {
    const product = (await this.productModel.create(body)).toObject();
    return product;
  }

  findAll() {
    return this.productModel.find();
  }

  findOne(_id: Types.ObjectId | string) {
    return this.productModel.findOne({ _id });
  }

  update(_id: Types.ObjectId | string, body: any) {
    return this.productModel.findOneAndUpdate({ _id }, body);
  }

  remove(_id: Types.ObjectId | string) {
    return this.productModel.findOneAndDelete({ _id });
  }
}
