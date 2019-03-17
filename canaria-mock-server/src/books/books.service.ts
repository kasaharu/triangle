import { Injectable } from '@nestjs/common';

import { Book, BookStatus } from './models';

@Injectable()
export class BooksService {
  fetchBookList(): Book[] {
    return [
      { id: 1, name: 'book1', status: BookStatus.READ, isFavorite: false },
      { id: 2, name: 'book2', status: BookStatus.READ, isFavorite: false },
      { id: 3, name: 'book3', status: BookStatus.READ, isFavorite: false },
      { id: 4, name: 'book4', status: BookStatus.READ, isFavorite: false },
      { id: 5, name: 'book5', status: BookStatus.READ, isFavorite: false },
      { id: 6, name: 'book6', status: BookStatus.READ, isFavorite: false },
      { id: 7, name: 'book7', status: BookStatus.READ, isFavorite: false },
      { id: 8, name: 'book8', status: BookStatus.READ, isFavorite: false },
      { id: 9, name: 'book9', status: BookStatus.READ, isFavorite: false },
      { id: 10, name: 'book10', status: BookStatus.READ, isFavorite: true },
      { id: 11, name: 'book11', status: BookStatus.READ, isFavorite: true },
      { id: 12, name: 'book12', status: BookStatus.READ, isFavorite: true },
      { id: 13, name: 'book13', status: BookStatus.READ, isFavorite: true },
      { id: 14, name: 'book14', status: BookStatus.READ, isFavorite: true },
      { id: 15, name: 'book15', status: BookStatus.READ, isFavorite: true },
      { id: 16, name: 'book16', status: BookStatus.READ, isFavorite: true },
      { id: 17, name: 'book17', status: BookStatus.READ, isFavorite: true },
      { id: 18, name: 'book18', status: BookStatus.READ, isFavorite: true },
      { id: 19, name: 'book19', status: BookStatus.READ, isFavorite: true },
      { id: 20, name: 'book20', status: BookStatus.READ, isFavorite: true },
      { id: 21, name: 'book21', status: BookStatus.READING, isFavorite: false },
      { id: 22, name: 'book22', status: BookStatus.READING, isFavorite: false },
      { id: 23, name: 'book23', status: BookStatus.READING, isFavorite: false },
      { id: 24, name: 'book24', status: BookStatus.READING, isFavorite: false },
      { id: 25, name: 'book25', status: BookStatus.READING, isFavorite: false },
      { id: 26, name: 'book26', status: BookStatus.READING, isFavorite: false },
      { id: 27, name: 'book27', status: BookStatus.READING, isFavorite: false },
      { id: 28, name: 'book28', status: BookStatus.READING, isFavorite: false },
      { id: 29, name: 'book29', status: BookStatus.READING, isFavorite: false },
      { id: 30, name: 'book30', status: BookStatus.READING, isFavorite: true },
      { id: 31, name: 'book31', status: BookStatus.READING, isFavorite: true },
      { id: 32, name: 'book32', status: BookStatus.READING, isFavorite: true },
      { id: 33, name: 'book33', status: BookStatus.READING, isFavorite: true },
      { id: 34, name: 'book34', status: BookStatus.READING, isFavorite: true },
      { id: 35, name: 'book35', status: BookStatus.READING, isFavorite: true },
      { id: 36, name: 'book36', status: BookStatus.READING, isFavorite: true },
      { id: 37, name: 'book37', status: BookStatus.READING, isFavorite: true },
      { id: 38, name: 'book38', status: BookStatus.READING, isFavorite: true },
      { id: 39, name: 'book39', status: BookStatus.READING, isFavorite: true },
      { id: 40, name: 'book40', status: BookStatus.READING, isFavorite: true },
    ];
  }
}
