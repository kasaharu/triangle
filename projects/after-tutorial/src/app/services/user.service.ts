import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { User } from '../core/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // tslint:disable-next-line:variable-name
  private _users$ = new BehaviorSubject<User[]>([]);

  get users$() {
    return this._users$.asObservable();
  }

  constructor(private http: HttpClient) {}

  fetchUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe((users) => {
      this._users$.next(users);
    });
  }
}
