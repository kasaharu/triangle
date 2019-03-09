import { Controller, Get } from '@nestjs/common';

import { BooksService } from './books.service';

export enum BookType {
  READ = 'READ',
  READING = 'READING',
}

@Controller('books')
export class BooksController {
  bookList;

  constructor(private booksService: BooksService) {
    this.bookList = this.booksService.fetchBookList();
  }

  // curl -X GET http://localhost:3000/books
  @Get()
  fetchAll() {
    return this.bookList;
  }

  @Get('/read')
  findReadBookList() {
    return this.bookList.filter(book => book.type === BookType.READ);
  }
}
