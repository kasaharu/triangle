import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../../core/domains';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'canaria-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss'],
})
export class ReadingComponent implements OnInit {
  bookList$: Observable<Book[]>;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookList$ = this.bookService.fetchReadingBookList();
  }
}
