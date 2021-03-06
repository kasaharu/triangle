import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../core/models';
import { RootStoreState, UserStoreActions, UserStoreSelectors } from '../../root-store';

@Component({
  selector: 'gh-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user$: Observable<User>;

  constructor(private route: ActivatedRoute, private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.user$ = this.store$.pipe(select(UserStoreSelectors.selectUser));
    this.route.paramMap.subscribe((params) => {
      const userName = params.get('userName');
      this.fetchUserDetail(userName);
    });
  }

  fetchUserDetail(userName: string): void {
    this.store$.dispatch(new UserStoreActions.FetchDetailRequestAction(userName));
  }
}
