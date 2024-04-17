import { Test, TestingModule } from '@nestjs/testing';
import { BookStatus } from 'src/book/models/enum/bookStatus';
import { RentBookUseCase } from './rentBook.use-case';

describe('RentBook', () => {
  let rentBook: RentBookUseCase;

  const mockRepository = {
    findOne: jest.fn(),
    update: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RentBookUseCase,
        {
          provide: 'IBookRepository',
          useValue: mockRepository,
        },
      ],
    }).compile();

    rentBook = module.get<RentBookUseCase>(RentBookUseCase);
  });
  it('', () => {
    expect(rentBook).toBeDefined();
  });

  describe('RentBookUseCase', () => {
    it('Deve alugar um livro corretamente', async () => {
      const mockbook = {
        id: 1,
        nome: 'livro',
        paginas: 20,
        status: BookStatus.Available,
      };
      mockRepository.findOne.mockReturnValue(mockbook);

      mockRepository.update.mockResolvedValue(null);

      const id = 1;
      await rentBook.execute(id);

      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledTimes(1);
    });
  });
});
