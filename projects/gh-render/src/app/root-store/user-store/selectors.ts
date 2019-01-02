import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './state';

const getUsers = (state: State) => state.users;
const getUser = (state: State) => state.selectedUser;
export const selectUserState = createFeatureSelector<State>('user');
export const selectUsers = createSelector(
  selectUserState,
  getUsers,
);
export const selectUser = createSelector(
  selectUserState,
  getUser,
);
