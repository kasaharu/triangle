import { Action } from '@ngrx/store';

import { User } from '../../core/models';

export enum ActionTypes {
  FETCH_REQUEST = '[User] Fetch Request',
  FETCH_SUCCESS = '[User] Fetch Success',
}

export class FetchRequestAction implements Action {
  readonly type = ActionTypes.FETCH_REQUEST;
}

export class FetchSuccessAction implements Action {
  readonly type = ActionTypes.FETCH_SUCCESS;
  constructor(public payload: { users: User[] }) {}
}

export type ActionsUnion = FetchRequestAction | FetchSuccessAction;
