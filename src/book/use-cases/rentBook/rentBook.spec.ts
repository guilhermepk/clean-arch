import { Test, TestingModule } from '@nestjs/testing';
import { BookStatus } from 'src/book/models/enum/bookStatus';
import { RentBookUseCase } from './rentBook.use-case';
import { BookEntity } from 'src/book/models/entities/book.entity';

describe('RentBook', () => {
  let rentBook: RentBookUseCase;
  let bookentity: BookEntity;
  const mockRepository = {
    findOne: jest.fn(),
    update: jest.fn(),
    borrowedBook: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RentBookUseCase,
        {
          provide: 'IBookRepository',
          useValue: mockRepository,
        },
        {
          provide: BookEntity,
          useValue: mockRepository,
        },
      ],
    }).compile();

    rentBook = module.get<RentBookUseCase>(RentBookUseCase);
    bookentity = module.get<BookEntity>(BookEntity);
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
      jest.spyOn(rentBook, 'execute').mockResolvedValue(mockbook as BookEntity);
      const id = 1;
      const data = await rentBook.execute(id);

      expect(data).toEqual(mockbook);
    });
  });
});
