import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateBookUseCase } from './createBook.use-case';
import { CreateBookDTO } from '../../models/dtos/createBook.dto';

@Controller('book')
export class CreateBookController {
  @Inject(CreateBookUseCase)
  private readonly createBookUseCase: CreateBookUseCase;

  @Post('create')
  create(@Body() input: CreateBookDTO) {
    return this.createBookUseCase.execute(input);
  }
}
