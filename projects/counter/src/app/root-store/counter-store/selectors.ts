import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './state';

const getCounter = (state: State) => state.counter;

export const selectCounterState = createFeatureSelector<State>('counter');
export const selectCounter = createSelector(
  selectCounterState,
  getCounter,
);
