import { Injectable } from '@nestjs/common';
import { IBookRepository } from '../models/interfaces/bookInterface.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from '../models/entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookTypeOrmRepository implements IBookRepository {
  constructor(
    @InjectRepository(BookEntity)
    private typeOrmRepo: Repository<BookEntity>,
  ) {}

  async create(book: BookEntity): Promise<void> {
    await this.typeOrmRepo.save(book);
  }

  async update(book: BookEntity): Promise<void> {
    await this.typeOrmRepo.update(book.id, book);
  }

  async findAll(): Promise<BookEntity[]> {
    return await this.typeOrmRepo.find();
  }

  async findOne(id: number): Promise<BookEntity> {
    return this.typeOrmRepo.findOne({ where: { id: id } });
  }
}
