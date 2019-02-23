import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../core/models';
import { RootStoreState, UserStoreActions, UserStoreSelectors } from '../../root-store';

@Component({
  selector: 'gh-user',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UseListComponent implements OnInit {
  userList$: Observable<User[]>;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.userList$ = this.store$.pipe(select(UserStoreSelectors.selectUsers));
    this.fetchUserList();
    this.resetUserDetail();
  }

  fetchUserList(): void {
    this.store$.dispatch(new UserStoreActions.FetchListRequestAction());
  }

  resetUserDetail(): void {
    this.store$.dispatch(new UserStoreActions.ResetDetailAction());
  }
}
