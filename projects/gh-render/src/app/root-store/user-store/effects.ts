import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import * as UserStoreActions from './actions';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  fetch$: Observable<Action> = this.actions$.pipe(
    ofType(UserStoreActions.ActionTypes.FETCH_LIST_REQUEST),
    mergeMap(() =>
      this.userService.fetchGitHubUserList().pipe(map((userList) => new UserStoreActions.FetchSuccessAction({ users: userList }))),
    ),
  );
}
