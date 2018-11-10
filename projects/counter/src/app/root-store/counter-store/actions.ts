import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  RESTORE = 'RESTORE',
  RESTORE_SUCCESS = 'RESTORE_SUCCESS',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  SAVE = 'SAVE',
  SAVE_SUCCESS = 'SAVE_SUCCESS',
}

export class Restore implements Action {
  readonly type = CounterActionTypes.RESTORE;
}

export class RestoreSuccess implements Action {
  readonly type = CounterActionTypes.RESTORE_SUCCESS;
  constructor(public payload: number) {}
}

export class Increment implements Action {
  readonly type = CounterActionTypes.INCREMENT;
}

export class Decrement implements Action {
  readonly type = CounterActionTypes.DECREMENT;
}

export class Reset implements Action {
  readonly type = CounterActionTypes.RESET;
  constructor(public payload: number) {}
}

export class Save implements Action {
  readonly type = CounterActionTypes.SAVE;
}

export class SaveSuccess implements Action {
  readonly type = CounterActionTypes.SAVE_SUCCESS;
}

export type CounterActionsUnion = Restore | RestoreSuccess | Increment | Decrement | Reset | Save | SaveSuccess;
