import { BadRequestException } from '@nestjs/common';
import { BookStatus } from '../enum/bookStatus';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('book')
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  paginas: number;

  @Column({ type: 'simple-enum' })
  status: BookStatus = BookStatus.Available;

  constructor(props?: { status?: BookStatus; nome: string; paginas: number }) {
    Object.assign(this, props);
  }

  borrowedBook() {
    if (this.status === BookStatus.Borrowed) {
      throw new BadRequestException({ message: 'book already rented' });
    }
    this.status = BookStatus.Borrowed;
  }
}
