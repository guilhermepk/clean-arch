import { Inject, Injectable } from '@nestjs/common';
import { IBookRepository } from '../../models/interfaces/bookInterface.repository';

@Injectable()
export class FindAllBookUseCase {
  @Inject('IBookRepository')
  private readonly bookRepo: IBookRepository;

  async execute() {
    return this.bookRepo.findAll();
  }
}
