import { Inject, Injectable } from '@nestjs/common';
import { IBookRepository } from '../../models/interfaces/bookInterface.repository';

@Injectable()
export class FindOneBookUseCase {
  @Inject('IBookRepository')
  private readonly bookRepo: IBookRepository;

  async execute(id: number) {
    return await this.bookRepo.findOne(id);
  }
}
