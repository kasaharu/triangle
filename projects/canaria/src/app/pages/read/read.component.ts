import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Book, BookType } from '../../core/domains';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'canaria-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  bookList$: Observable<Book[]>;
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookList$ = this.bookService.fetchBookList();
  }
}
