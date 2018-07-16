import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  RESTORE = 'RESTORE',
  RESTORE_SUCCESS = 'RESTORE_SUCCESS',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  SAVE = 'SAVE',
}

export class Restore implements Action {
  readonly type = CounterActionTypes.RESTORE;
  constructor(public payload: number) {}
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

export type CounterActionsUnion = Restore | RestoreSuccess | Increment | Decrement | Reset | Save;
