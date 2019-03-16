import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BookType } from '../../core/domains';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'canaria-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  bookTypeList = [BookType.NONE, BookType.READ, BookType.READING];
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.bookForm = this.fb.group({
      name: [''],
      type: [this.bookTypeList[0]],
      isFavorite: [true],
    });
  }

  ngOnInit() {}

  clickButton() {
    this.bookService.registNewBook(this.bookForm.value).subscribe(res => console.log(res));
  }
}
