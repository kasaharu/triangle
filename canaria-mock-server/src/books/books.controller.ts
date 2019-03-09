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

  // curl -X GET http://localhost:3000/books/read
  @Get('/read')
  findReadBookList() {
    return this.bookList.filter(book => book.type === BookType.READ);
  }

  // curl -X GET http://localhost:3000/books/reading
  @Get('/reading')
  findReadingBookList() {
    return this.bookList.filter(book => book.type === BookType.READING);
  }
}
