import * as CounterActions from '../actions/counter';
import { counterReducer } from './counter';

describe('counterReducer', () => {
  it('should restore', () => {
    expect(counterReducer(0, new CounterActions.Restore())).toBe(0);
  });

  it('should restore_success', () => {
    expect(counterReducer(0, new CounterActions.RestoreSuccess(10))).toBe(10);
  });

  it('should increment', () => {
    expect(counterReducer(0, new CounterActions.Increment())).toBe(1);
  });

  it('should decrement', () => {
    expect(counterReducer(0, new CounterActions.Decrement())).toBe(-1);
  });

  it('should reset', () => {
    expect(counterReducer(0, new CounterActions.Reset(0))).toBe(0);
  });

  it('should save', () => {
    expect(counterReducer(0, new CounterActions.Save())).toBe(0);
  });

  it('should save_success', () => {
    expect(counterReducer(0, new CounterActions.SaveSuccess())).toBe(0);
  });
});
