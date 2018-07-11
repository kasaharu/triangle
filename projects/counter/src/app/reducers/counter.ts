import { Action } from '@ngrx/store';

import { CounterActionTypes } from '../actions/counter';

const initialState = 0;

export function counterReducer(state: number = initialState, action: Action) {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return state + 1;
    case CounterActionTypes.DECREMENT:
      return state - 1;
    case CounterActionTypes.RESET:
      return 0;
    default:
      return state;
  }
}
