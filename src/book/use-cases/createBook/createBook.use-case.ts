import { Inject, Injectable } from '@nestjs/common';
import { IBookRepository } from '../../models/interfaces/bookInterface.repository';
import { CreateBookDTO } from 'src/book/models/dtos/createBook.dto';
import { BookEntity } from '../../models/entities/book.entity';

@Injectable()
export class CreateBookUseCase {
  @Inject('IBookRepository')
  private readonly bookRepo: IBookRepository;

  async execute(input: CreateBookDTO) {
    const book = new BookEntity(input);
    await this.bookRepo.create(book);
    return book;
  }
}
