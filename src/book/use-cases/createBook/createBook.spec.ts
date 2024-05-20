import { Test, TestingModule } from '@nestjs/testing';
import { CreateBookDTO } from 'src/book/models/dtos/createBook.dto';
import { CreateBookUseCase } from './createBook.use-case';

describe('CreateBookUseCase', () => {
  const mockRepository = {
    create: jest.fn(),
  };
  let createBook: CreateBookUseCase;

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateBookUseCase,
        { provide: 'IBookRepository', useValue: mockRepository },
      ],
    }).compile();

    createBook = module.get<CreateBookUseCase>(CreateBookUseCase);
  });
  it('should be defined', () => {
    expect(createBook).toBeDefined();
  });

  describe('CreateBookUseCase', () => {
    it('should create a book correctly', async () => {
      mockRepository.create.mockReturnValue(null);
      const bookmock = new CreateBookDTO();
      bookmock.nome = 'livro';
      bookmock.paginas = 20;
      await createBook.execute(bookmock);
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });
});
