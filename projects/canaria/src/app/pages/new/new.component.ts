import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BookType } from '../../core/domains';

@Component({
  selector: 'canaria-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  bookTypeList = [BookType.NONE, BookType.READ, BookType.READING];
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      name: ['hoge'],
      type: [this.bookTypeList[0]],
      isFavorite: ['true'],
    });
  }

  ngOnInit() {}
}
