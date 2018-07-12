import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  SAVE = 'SAVE',
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

export type CounterActionsUnion = Increment | Decrement | Reset | Save;