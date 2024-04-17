import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './models/entities/book.entity';
import { BookTypeOrmRepository } from './repository/book.repositoy';
import { CreateBookUseCase } from './use-cases/createBook/createBook.use-case';
import { CreateBookController } from './use-cases/createBook/createBook.controller';
import { FindAllBookUseCase } from './use-cases/findAllBooks/findAllBook.use-case';
import { FindAllBookController } from './use-cases/findAllBooks/findAllBook.controller';
import { FindOneBookController } from './use-cases/findBook/findOneBook.controller';
import { FindOneBookUseCase } from './use-cases/findBook/findOneBook.use-case';
import { RentBookUseCase } from './use-cases/rentBook/rentBook.use-case';
import { RentBookController } from './use-cases/rentBook/rentBook.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  providers: [
    RentBookUseCase,
    FindOneBookUseCase,
    FindAllBookUseCase,
    CreateBookUseCase,
    BookTypeOrmRepository,
    {
      provide: 'IBookRepository',
      useExisting: BookTypeOrmRepository,
    },
  ],
  controllers: [
    RentBookController,
    CreateBookController,
    FindAllBookController,
    FindOneBookController,
  ],
})
export class BookModule {}
