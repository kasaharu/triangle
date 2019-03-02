import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Book, BookType } from '../../core/domains';

@Component({
  selector: 'canaria-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss'],
})
export class ReadingComponent implements OnInit {
  bookList$: Observable<Book[]>;

  constructor() {}

  ngOnInit() {
    this.bookList$ = of([
      { id: 101, name: 'book101', type: BookType.READING, isFavorite: true },
      { id: 102, name: 'book102', type: BookType.READING, isFavorite: true },
      { id: 103, name: 'book103', type: BookType.READING, isFavorite: true },
      { id: 104, name: 'book104', type: BookType.READING, isFavorite: true },
      { id: 105, name: 'book105', type: BookType.READING, isFavorite: true },
      { id: 106, name: 'book106', type: BookType.READING, isFavorite: true },
      { id: 107, name: 'book107', type: BookType.READING, isFavorite: true },
      { id: 108, name: 'book108', type: BookType.READING, isFavorite: true },
      { id: 109, name: 'book109', type: BookType.READING, isFavorite: true },
      { id: 110, name: 'book110', type: BookType.READING, isFavorite: true },
      { id: 111, name: 'book111', type: BookType.READING, isFavorite: true },
      { id: 112, name: 'book112', type: BookType.READING, isFavorite: true },
      { id: 113, name: 'book113', type: BookType.READING, isFavorite: true },
      { id: 114, name: 'book114', type: BookType.READING, isFavorite: true },
      { id: 115, name: 'book115', type: BookType.READING, isFavorite: true },
      { id: 116, name: 'book116', type: BookType.READING, isFavorite: true },
      { id: 117, name: 'book117', type: BookType.READING, isFavorite: true },
      { id: 118, name: 'book118', type: BookType.READING, isFavorite: true },
      { id: 119, name: 'book119', type: BookType.READING, isFavorite: true },
      { id: 120, name: 'book120', type: BookType.READING, isFavorite: true },
    ]);
  }
}
