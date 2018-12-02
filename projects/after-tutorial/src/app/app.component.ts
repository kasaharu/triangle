import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './core/models/user';

@Component({
  selector: 'at-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
      this.users = data;
    });
  }
}
