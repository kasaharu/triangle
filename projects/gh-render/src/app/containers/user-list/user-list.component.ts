import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootStoreState, UserStoreActions, UserStoreSelectors } from '../../root-store';

import { User } from '../../core/models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'gh-user',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UseListComponent implements OnInit {
  userList: User[];
  userList$: Observable<User[]>;

  constructor(private store$: Store<RootStoreState.State>, private userService: UserService) {}

  ngOnInit() {
    this.userList$ = this.store$.pipe(select(UserStoreSelectors.selectUser));
    this.store$.dispatch(new UserStoreActions.FetchRequestAction());
    this.fetchUserList();
  }

  fetchUserList(): void {
    this.userService.fetchGitHubUserList().subscribe((userList) => (this.userList = userList));
  }
}
