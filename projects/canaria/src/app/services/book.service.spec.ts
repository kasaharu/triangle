import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Book, BookType } from '../core/domains';
import { BookService } from './book.service';

describe('BookService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });

  it('call fetchReadBookList() method', () => {
    const testBookList: Book[] = [{ id: 1, name: 'test-book', type: BookType.READ, isFavorite: true }];

    const service: BookService = TestBed.get(BookService);
    service.fetchReadBookList().subscribe((bookList) => expect(bookList).toEqual(testBookList));

    const req = httpTestingController.expectOne('api/books/read');
    expect(req.request.method).toEqual('GET');
    req.flush(testBookList);
    httpTestingController.verify();
  });

  it('call fetchReadingBookList() method', () => {
    const testBookList: Book[] = [{ id: 1, name: 'test-book', type: BookType.READ, isFavorite: true }];

    const service: BookService = TestBed.get(BookService);
    service.fetchReadingBookList().subscribe((bookList) => expect(bookList).toEqual(testBookList));

    const req = httpTestingController.expectOne('api/books/reading');
    expect(req.request.method).toEqual('GET');
    req.flush(testBookList);
    httpTestingController.verify();
  });
});
