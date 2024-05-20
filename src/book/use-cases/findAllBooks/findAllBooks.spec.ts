import { Test, TestingModule } from '@nestjs/testing';
import { BookStatus } from 'src/book/models/enum/bookStatus';
import { FindAllBookUseCase } from './findAllBooks.use-case';

describe('FindAllBook', () => {
  const mockRepository = {
    findAll: jest.fn(),
  };
  let findAllBook: FindAllBookUseCase;
  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllBookUseCase,
        { provide: 'IBookRepository', useValue: mockRepository },
      ],
    }).compile();
    findAllBook = module.get<FindAllBookUseCase>(FindAllBookUseCase);
  });
  it('should be defined', () => {
    expect(findAllBook).toBeDefined();
  });

  describe('FindAllBookUseCase', () => {
    it('Deve trazer todos os livros', async () => {
      const mockbook = [
        { id: 1, nome: 'livro  21', paginas: 20, status: BookStatus.Available },
      ];
      mockRepository.findAll.mockResolvedValue(mockbook);
      const bookdata = await findAllBook.execute();

      expect(mockRepository.findAll).toBeCalledTimes(1);
      expect(bookdata).toEqual(mockbook);
    });
  });
});
