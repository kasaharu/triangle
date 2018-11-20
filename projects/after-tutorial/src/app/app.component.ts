import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserListFilter } from './state';
import { UserListUsecase } from './user-list.usecase';

@Component({
  selector: 'at-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users$ = this.userListUsecase.users$;
  userListFilter$ = this.userListUsecase.filter$;

  constructor(private userListUsecase: UserListUsecase) {}

  ngOnInit() {
    this.userListUsecase.fetchUsers();
  }

  setUserListFilter(value: UserListFilter) {
    this.userListUsecase.setNameFilter(value.nameFilter);
  }
}
