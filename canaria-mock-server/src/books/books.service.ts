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
    ];
  }
}
