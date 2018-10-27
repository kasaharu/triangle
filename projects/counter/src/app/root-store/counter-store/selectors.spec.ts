import { selectCounter } from './selectors';
import { State } from './state';

describe('CounterStoreSelector', () => {
  it('exec selectCounter', () => {
    const testCounterState: State = { counter: { value: 0 } };
    expect(selectCounter.projector(testCounterState).value).toEqual(0);
  });
});
