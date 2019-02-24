import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { UserService } from '../../services/user.service';
import * as UserStoreActions from './actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  fetchList$: Observable<Action> = this.actions$.pipe(
    ofType(UserStoreActions.ActionTypes.FETCH_LIST_REQUEST),
    mergeMap(() => this.userService.fetchGitHubUserList().pipe(map((userList) => new UserStoreActions.FetchListSuccessAction(userList)))),
  );

  @Effect()
  fetchDetail$: Observable<Action> = this.actions$.pipe(
    ofType<UserStoreActions.FetchDetailRequestAction>(UserStoreActions.ActionTypes.FETCH_DETAIL_REQUEST),
    mergeMap((action) =>
      this.userService.fetchUserDetail(action.payload).pipe(map((userInfo) => new UserStoreActions.FetchDetailSuccessAction(userInfo))),
    ),
  );
}
