import { Action } from '@ngrx/store';

import { User } from '../../core/models';

export enum ActionTypes {
  FETCH_LIST_REQUEST = '[User] Fetch List Request',
  FETCH_LIST_SUCCESS = '[User] Fetch List Success',
  FETCH_DETAIL_REQUEST = '[User] Fetch Detail Request',
  FETCH_DETAIL_SUCCESS = '[User] Fetch Detail Success',
}

export class FetchListRequestAction implements Action {
  readonly type = ActionTypes.FETCH_LIST_REQUEST;
}

export class FetchListSuccessAction implements Action {
  readonly type = ActionTypes.FETCH_LIST_SUCCESS;
  constructor(public payload: { users: User[] }) {}
}

export type ActionsUnion = FetchListRequestAction | FetchListSuccessAction;
