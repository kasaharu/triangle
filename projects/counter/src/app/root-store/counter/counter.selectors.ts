import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from '../../core/state';
import * as fromCounter from './counter.reducers';

export const getFeatureState = createFeatureSelector<State>('counter');
export const getCounter = createSelector(getFeatureState, fromCounter.getCounter);
