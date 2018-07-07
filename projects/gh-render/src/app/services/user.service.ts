import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly targetUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  fetchGitHubUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.targetUrl);
  }
}
