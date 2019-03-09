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

  // curl -X GET http://localhost:3000/books/2
  @Get(':id')
  find(@Param('id') id) {
    return this.bookList.find(book => book.id === +id);
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

  // curl -X POST -H "Content-Type: application/json" http://localhost:3000/books -d '{ "name": "book41", "type": "READ", "isFavorite": true }'
  @Post()
  create(@Body() body) {
    const newId = this.bookList.length + 1;
    const newItem = { ...body, id: newId };
    this.bookList.push(newItem);
    return `This action adds a new book : id ${newId}`;
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
