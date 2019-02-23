import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../core/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly targetUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  fetchGitHubUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.targetUrl);
  }

  fetchUserDetail(name: string): Observable<User> {
    return this.http.get<User>(`${this.targetUrl}/${name}`);
  }
}
