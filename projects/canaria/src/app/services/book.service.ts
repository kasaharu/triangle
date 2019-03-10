import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../core/domains';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  readonly booksUrl = 'api/books';

  constructor(private http: HttpClient) {}

  fetchReadBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.booksUrl}/read`);
  }

  fetchReadingBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.booksUrl}/reading`);
  }
}
