import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { BookStatus } from '../../core/domains';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'canaria-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  bookStatusList = [BookStatus.NONE, BookStatus.READ, BookStatus.READING];
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private bookService: BookService) {
    this.bookForm = this.fb.group({
      name: [''],
      status: [this.bookStatusList[0]],
      isFavorite: [true],
    });
  }

  ngOnInit() {}

  clickButton() {
    // tslint:disable-next-line: no-console
    this.bookService.registNewBook(this.bookForm.value).subscribe((res) => console.log(res));
    this.router.navigate(['/']);
  }
}
