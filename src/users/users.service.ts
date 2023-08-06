import {
  Injectable,
  InternalServerErrorException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(body: CreateUserDto) {
    try {
      const user: { password: string } = (
        await this.userModel.create(body)
      ).toObject();
      delete user['password'];
      return user;
    } catch (err) {
      console.log(err)
      switch (err.code) {
        case 11000:
          throw new HttpException(
            'This email already exists',
            HttpStatus.BAD_REQUEST,
          );
          break;

        default:
          throw new InternalServerErrorException(err.message);
          break;
      }
    }
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(_id: Types.ObjectId | string) {
    return this.userModel.findOne({ _id });
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ email }).select('+password');
  }

  update(_id: Types.ObjectId | string, body: any) {
    return this.userModel.findOneAndUpdate({ _id }, body);
  }

  remove(_id: Types.ObjectId | string) {
    return this.userModel.findOneAndDelete({ _id });
  }
}
