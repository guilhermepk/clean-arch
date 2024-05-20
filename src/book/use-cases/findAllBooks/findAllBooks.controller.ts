import { Controller, Get, Inject } from '@nestjs/common';
import { FindAllBookUseCase } from './findAllBooks.use-case';

@Controller('book')
export class FindAllBookController {
  @Inject(FindAllBookUseCase)
  private readonly findAllBookUseCase: FindAllBookUseCase;

  @Get('all')
  findAll() {
    return this.findAllBookUseCase.execute();
  }
}
