import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { UserDetail } from '../models/user-detail';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly targetUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  fetchGitHubUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.targetUrl);
  }

  fetchGitHubUser(userName: string): Observable<UserDetail> {
    const requestUrl = `${this.targetUrl}/${userName}`;
    return this.http.get<UserDetail>(requestUrl);
  }
}
