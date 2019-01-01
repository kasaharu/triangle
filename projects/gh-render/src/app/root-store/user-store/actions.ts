import { Action } from '@ngrx/store';

import { User } from '../../core/models';

export enum ActionTypes {
  FETCH_LIST_REQUEST = '[User] Fetch List Request',
  FETCH_LIST_SUCCESS = '[User] Fetch List Success',
}

export class FetchRequestAction implements Action {
  readonly type = ActionTypes.FETCH_LIST_REQUEST;
}

export class FetchSuccessAction implements Action {
  readonly type = ActionTypes.FETCH_LIST_SUCCESS;
  constructor(public payload: { users: User[] }) {}
}

export type ActionsUnion = FetchRequestAction | FetchSuccessAction;
