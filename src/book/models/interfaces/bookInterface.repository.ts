import { BookEntity } from '../entities/book.entity';

export interface IBookRepository {
  create(book: BookEntity): Promise<void>;
  update(book: BookEntity): Promise<void>;
  findAll(): Promise<BookEntity[]>;
  findOne(id: number): Promise<BookEntity>;
}
