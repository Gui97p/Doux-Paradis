import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { IdMiddleware } from 'src/middlewares/id.middleware';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IdMiddleware).forRoutes('products/:id');
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'products', method: RequestMethod.GET },
        { path: 'products/:id', method: RequestMethod.GET },
      )
      .forRoutes('products', 'products/:id');
  }
}
