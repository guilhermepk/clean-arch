import { Controller, Inject, Param, Patch } from '@nestjs/common';
import { RentBookUseCase } from './rentBook.use-case';

@Controller('book')
export class RentBookController {
  @Inject(RentBookUseCase)
  private readonly rentBookUseCase: RentBookUseCase;

  @Patch(':id/rent')
  execute(@Param('id') id: number) {
    return this.rentBookUseCase.execute(id);
  }
}
