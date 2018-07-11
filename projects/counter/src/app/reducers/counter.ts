import { CounterActionTypes, CounterActionsUnion } from '../actions/counter';

const initialState = 0;

export function counterReducer(state: number = initialState, action: CounterActionsUnion) {
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
