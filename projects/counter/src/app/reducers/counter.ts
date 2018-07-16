import { CounterActionTypes, CounterActionsUnion } from '../actions/counter';

const initialState = 0;

export function counterReducer(state: number = initialState, action: CounterActionsUnion) {
  switch (action.type) {
    case CounterActionTypes.RESTORE:
      return state;
    case CounterActionTypes.RESTORE_SUCCESS:
      return action.payload;
    case CounterActionTypes.INCREMENT:
      return state + 1;
    case CounterActionTypes.DECREMENT:
      return state - 1;
    case CounterActionTypes.RESET:
      return 0;
    case CounterActionTypes.SAVE:
      return state;
    default:
      return state;
  }
}
