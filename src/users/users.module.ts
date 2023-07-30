import { MongooseModule } from '@nestjs/mongoose';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';
import { hash } from 'bcrypt';
import { IdMiddleware } from 'src/middlewares/id.middleware';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;

          schema.pre('save', async function (next) {
            if (!this.isModified('password')) {
              return next();
            }

            this.password = await hash(this.password, 10);

            next();
          });

          return schema;
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IdMiddleware).forRoutes('users/:id');
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: 'users', method: RequestMethod.POST })
      .forRoutes('users', 'users/:id');
  }
}
