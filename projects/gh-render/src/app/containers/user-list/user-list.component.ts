import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootStoreState, UserStoreActions, UserStoreSelectors } from '../../root-store';
import { User } from '../../core/models';

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
