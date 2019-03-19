import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { Book, BookStatus } from '../../core/domains';
import { BookService } from '../../services/book.service';
import { NewComponent } from './new.component';

describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;
  let bookService: BookService;

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [NewComponent],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();

    bookService = TestBed.get(BookService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call clickButton()', () => {
    const newBook: Book = { id: 1, name: 'book', status: BookStatus.NONE, isFavorite: true };
    spyOn(bookService, 'registNewBook').and.returnValue(of(newBook));
    component.clickButton();
    expect(bookService.registNewBook).toHaveBeenCalled();
  });
});
