import { Module } from '@nestjs/common';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { CategoryModule } from '../category/category.module';
import { PrismaService } from 'src/infra/infra/prisma/prisma.service';

@Module({
  controllers: [ProductController],
  imports: [CategoryModule],
  providers: [ProductService, PrismaService],
})
export class ProductModule {}
