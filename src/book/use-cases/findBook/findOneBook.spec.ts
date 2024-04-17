import { Test, TestingModule } from '@nestjs/testing';
import { FindOneBookUseCase } from './findOneBook.use-case';
import { BookStatus } from 'src/book/models/enum/bookStatus';

describe('FindOneBook', () => {
  let findOneBook: FindOneBookUseCase;
  const mockReposiotry = {
    findOne: jest.fn(),
  };
  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneBookUseCase,
        { provide: 'IBookRepository', useValue: mockReposiotry },
      ],
    }).compile();

    findOneBook = module.get<FindOneBookUseCase>(FindOneBookUseCase);
  });

  it('', () => {
    expect(findOneBook).toBeDefined();
  });

  describe('FindOneBookUseCase', () => {
    it('Deve trazer apenas um livro', async () => {
      const mockbook = {
        id: 1,
        nome: 'livro',
        paginas: 20,
        status: BookStatus.Available,
      };
      mockReposiotry.findOne.mockResolvedValue(mockbook);

      const id = 1;
      const bookdata = await findOneBook.execute(id);

      expect(mockReposiotry.findOne).toBeCalledTimes(1);
      expect(bookdata).toEqual(mockbook);
    });
  });
});
