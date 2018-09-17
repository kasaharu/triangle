import { Counter } from '../../core/models';

export interface State {
  counter: Counter;
}

export const initialState: State = {
  counter: { value: 0 },
};
