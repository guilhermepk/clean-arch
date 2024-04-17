import { Inject, Injectable } from '@nestjs/common';
import { IBookRepository } from '../../models/interfaces/bookInterface.repository';

@Injectable()
export class RentBookUseCase {
  @Inject('IBookRepository')
  private readonly bookRepo: IBookRepository;

  async execute(id: number) {
    const book = await this.bookRepo.findOne(id);
    book.borrowedBook();
    await this.bookRepo.update(book);
    return book;
  }
}
