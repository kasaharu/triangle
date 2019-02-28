import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Book, BookType } from '../../core/domains';

@Component({
  selector: 'canaria-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  bookList$: Observable<Book[]>;
  constructor() {}

  ngOnInit() {
    this.bookList$ = of([
      { id: 1, name: 'book1', type: BookType.READ },
      { id: 2, name: 'book2', type: BookType.READ },
      { id: 3, name: 'book3', type: BookType.READ },
      { id: 4, name: 'book4', type: BookType.READ },
      { id: 5, name: 'book5', type: BookType.READ },
      { id: 6, name: 'book6', type: BookType.READ },
      { id: 7, name: 'book7', type: BookType.READ },
      { id: 8, name: 'book8', type: BookType.READ },
      { id: 9, name: 'book9', type: BookType.READ },
      { id: 10, name: 'book10', type: BookType.READ },
      { id: 11, name: 'book11', type: BookType.READ },
      { id: 12, name: 'book12', type: BookType.READ },
      { id: 13, name: 'book13', type: BookType.READ },
      { id: 14, name: 'book14', type: BookType.READ },
      { id: 15, name: 'book15', type: BookType.READ },
      { id: 16, name: 'book16', type: BookType.READ },
      { id: 17, name: 'book17', type: BookType.READ },
      { id: 18, name: 'book18', type: BookType.READ },
      { id: 19, name: 'book19', type: BookType.READ },
      { id: 20, name: 'book20', type: BookType.READ },
    ]);
  }
}