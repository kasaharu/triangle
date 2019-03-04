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

  it('call fetchBookList() method', () => {
    const testBookList: Book[] = [{ id: 1, name: 'test-book', type: BookType.READ, isFavorite: true }];

    const service: BookService = TestBed.get(BookService);
    service.fetchBookList().subscribe((bookList) => expect(bookList).toEqual(testBookList));

    const req = httpTestingController.expectOne('api/books');
    expect(req.request.method).toEqual('GET');
    req.flush(testBookList);
    httpTestingController.verify();
  });
});
