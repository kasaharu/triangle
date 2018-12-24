import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './state';

const getUsers = (state: State) => state.users;
export const selectUserState = createFeatureSelector<State>('user');
export const selectUser = createSelector(
  selectUserState,
  getUsers,
);
