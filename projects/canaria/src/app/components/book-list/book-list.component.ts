import { Component, Input, OnInit } from '@angular/core';

import { Book } from '../../core/domains';

@Component({
  selector: 'canaria-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  @Input()
  bookList: Book[];
  constructor() {}

  ngOnInit() {}
}
