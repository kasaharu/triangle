import { Component, OnInit } from '@angular/core';

import { UserListUsecase } from './user-list.usecase';

@Component({
  selector: 'at-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users$ = this.userListUsecase.users$;

  constructor(private userListUsecase: UserListUsecase) {}

  ngOnInit() {
    this.userListUsecase.fetchUsers();
  }
}
