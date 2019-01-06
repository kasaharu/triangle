import { Action } from '@ngrx/store';

import { User } from '../../core/models';

export enum ActionTypes {
  FETCH_LIST_REQUEST = '[User] Fetch List Request',
  FETCH_LIST_SUCCESS = '[User] Fetch List Success',
  FETCH_DETAIL_REQUEST = '[User] Fetch Detail Request',
  FETCH_DETAIL_SUCCESS = '[User] Fetch Detail Success',
  RESET_DETAIL = '[User] Reset Detail',
}

export class FetchListRequestAction implements Action {
  readonly type = ActionTypes.FETCH_LIST_REQUEST;
}

export class FetchListSuccessAction implements Action {
  readonly type = ActionTypes.FETCH_LIST_SUCCESS;
  constructor(public payload: User[]) {}
}

export class FetchDetailRequestAction implements Action {
  readonly type = ActionTypes.FETCH_DETAIL_REQUEST;
  constructor(public payload: string) {}
}

export class FetchDetailSuccessAction implements Action {
  readonly type = ActionTypes.FETCH_DETAIL_SUCCESS;
  constructor(public payload: User) {}
}

export class ResetDetailAction implements Action {
  readonly type = ActionTypes.RESET_DETAIL;
}

export type ActionsUnion =
  | FetchListRequestAction
  | FetchListSuccessAction
  | FetchDetailRequestAction
  | FetchDetailSuccessAction
  | ResetDetailAction;
