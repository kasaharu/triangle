import { CounterActionTypes, CounterActionsUnion } from './counter.actions';
import { State } from '../../core/state';

const initialState: State = {
  counter: {
    value: 0,
  },
};

export function counterReducer(state: State = initialState, action: CounterActionsUnion) {
  switch (action.type) {
    case CounterActionTypes.RESTORE:
      return state;
    case CounterActionTypes.RESTORE_SUCCESS:
      return action.payload;
    case CounterActionTypes.INCREMENT:
      return { counter: { value: state.counter.value + 1 } };
    case CounterActionTypes.DECREMENT:
      return { counter: { value: state.counter.value - 1 } };
    case CounterActionTypes.RESET:
      return { counter: { value: 0 } };
    case CounterActionTypes.SAVE:
      return state;
    case CounterActionTypes.SAVE_SUCCESS:
      return state;
    default:
      return state;
  }
}

export const getCounter = (state: State) => state.counter.value;
