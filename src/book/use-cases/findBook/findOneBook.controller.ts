import { Controller, Get, Inject, Param } from '@nestjs/common';
import { FindOneBookUseCase } from './findOneBook.use-case';

@Controller('book')
export class FindOneBookController {
  @Inject(FindOneBookUseCase)
  private readonly findOneBookUseCase: FindOneBookUseCase;

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.findOneBookUseCase.execute(id);
  }
}
