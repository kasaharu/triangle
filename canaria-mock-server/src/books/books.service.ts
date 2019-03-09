import { Injectable } from '@nestjs/common';

export enum BookType {
  READ = 'READ',
  READING = 'READING',
}

@Injectable()
export class BooksService {
  fetchBookList() {
    return [
      { id: 1, name: 'book1', type: BookType.READ, isFavorite: false },
      { id: 2, name: 'book2', type: BookType.READ, isFavorite: false },
      { id: 3, name: 'book3', type: BookType.READ, isFavorite: false },
      { id: 4, name: 'book4', type: BookType.READ, isFavorite: false },
      { id: 5, name: 'book5', type: BookType.READ, isFavorite: false },
      { id: 6, name: 'book6', type: BookType.READ, isFavorite: false },
      { id: 7, name: 'book7', type: BookType.READ, isFavorite: false },
      { id: 8, name: 'book8', type: BookType.READ, isFavorite: false },
      { id: 9, name: 'book9', type: BookType.READ, isFavorite: false },
      { id: 10, name: 'book10', type: BookType.READ, isFavorite: true },
      { id: 11, name: 'book11', type: BookType.READ, isFavorite: true },
      { id: 12, name: 'book12', type: BookType.READ, isFavorite: true },
      { id: 13, name: 'book13', type: BookType.READ, isFavorite: true },
      { id: 14, name: 'book14', type: BookType.READ, isFavorite: true },
      { id: 15, name: 'book15', type: BookType.READ, isFavorite: true },
      { id: 16, name: 'book16', type: BookType.READ, isFavorite: true },
      { id: 17, name: 'book17', type: BookType.READ, isFavorite: true },
      { id: 18, name: 'book18', type: BookType.READ, isFavorite: true },
      { id: 19, name: 'book19', type: BookType.READ, isFavorite: true },
      { id: 20, name: 'book20', type: BookType.READ, isFavorite: true },
      { id: 21, name: 'book21', type: BookType.READING, isFavorite: false },
      { id: 22, name: 'book22', type: BookType.READING, isFavorite: false },
      { id: 23, name: 'book23', type: BookType.READING, isFavorite: false },
      { id: 24, name: 'book24', type: BookType.READING, isFavorite: false },
      { id: 25, name: 'book25', type: BookType.READING, isFavorite: false },
      { id: 26, name: 'book26', type: BookType.READING, isFavorite: false },
      { id: 27, name: 'book27', type: BookType.READING, isFavorite: false },
      { id: 28, name: 'book28', type: BookType.READING, isFavorite: false },
      { id: 29, name: 'book29', type: BookType.READING, isFavorite: false },
      { id: 30, name: 'book30', type: BookType.READING, isFavorite: true },
      { id: 31, name: 'book31', type: BookType.READING, isFavorite: true },
      { id: 32, name: 'book32', type: BookType.READING, isFavorite: true },
      { id: 33, name: 'book33', type: BookType.READING, isFavorite: true },
      { id: 34, name: 'book34', type: BookType.READING, isFavorite: true },
      { id: 35, name: 'book35', type: BookType.READING, isFavorite: true },
      { id: 36, name: 'book36', type: BookType.READING, isFavorite: true },
      { id: 37, name: 'book37', type: BookType.READING, isFavorite: true },
      { id: 38, name: 'book38', type: BookType.READING, isFavorite: true },
      { id: 39, name: 'book39', type: BookType.READING, isFavorite: true },
      { id: 40, name: 'book40', type: BookType.READING, isFavorite: true },
    ];
  }
}
