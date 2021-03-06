import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { BooksService } from './books.service';
import { Book, BookStatus } from './models';

@Controller('books')
export class BooksController {
  bookList;

  constructor(private booksService: BooksService) {
    this.bookList = this.booksService.fetchBookList();
  }

  // curl -X GET http://localhost:3000/books
  @Get()
  fetchAll(): Book[] {
    return this.bookList;
  }

  // curl -X GET http://localhost:3000/books/read
  @Get('/read')
  findReadBookList(): Book[] {
    return this.bookList.filter(book => book.status === BookStatus.READ);
  }

  // curl -X GET http://localhost:3000/books/reading
  @Get('/reading')
  findReadingBookList(): Book[] {
    return this.bookList.filter(book => book.status === BookStatus.READING);
  }

  // curl -X GET http://localhost:3000/books/2
  @Get(':id')
  find(@Param('id') id): Book {
    return this.bookList.find(book => book.id === +id);
  }

  // curl -X POST -H "Content-Type: application/json" http://localhost:3000/books -d '{ "name": "book41", "status": "READ", "isFavorite": true }'
  @Post()
  create(@Body() body) {
    const newId = this.bookList.length + 1;
    const newItem = { ...body, id: newId };
    this.bookList.push(newItem);
    return this.bookList;
  }

  // curl -X PUT -H "Content-Type: application/json" http://localhost:3000/books/3 -d '{ "name": "book103" }'
  @Put(':id')
  update(@Param('id') id, @Body() body) {
    this.bookList.forEach(book => {
      if (book.id === +id) {
        book.name = body.name;
      }
    });
    return `This action updates a #${id} book`;
  }

  // curl -X DELETE -H "Content-Type: application/json" http://localhost:3000/books/2
  @Delete(':id')
  delete(@Param('id') id) {
    const cloneBookList = this.bookList;
    this.bookList = cloneBookList.filter(book => book.id !== +id);
    return `This action removes a #${id} book`;
  }
}
