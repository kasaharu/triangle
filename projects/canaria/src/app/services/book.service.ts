import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../core/domains';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  readonly booksUrl = 'api/books';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  fetchReadBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.booksUrl}/read`);
  }

  fetchReadingBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.booksUrl}/reading`);
  }

  registNewBook(book: Book): Observable<Book[]> {
    return this.http.post<Book[]>(`${this.booksUrl}`, book, this.httpOptions);
  }
}
