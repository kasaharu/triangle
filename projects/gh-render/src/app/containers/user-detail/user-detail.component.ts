import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootStoreState, UserStoreActions, UserStoreSelectors } from '../../root-store';
import { User } from '../../core/models';

@Component({
  selector: 'gh-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.user$ = this.store$.pipe(select(UserStoreSelectors.selectUser));
    this.fetchUserDetail();
  }

  fetchUserDetail(): void {
    this.store$.dispatch(new UserStoreActions.FetchDetailRequestAction('test'));
  }
}
