import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';

import * as CounterActions from './actions';
import { selectCounterState } from './selectors';
import { State } from './state';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions, private store: Store<State>) {}

  @Effect()
  restore$: Observable<Action> = this.actions$.pipe(
    ofType(CounterActions.CounterActionTypes.RESTORE),
    mergeMap((_) => of(+localStorage.getItem('triangle-counter-count')).pipe(map((data) => new CounterActions.RestoreSuccess(data)))),
  );

  @Effect()
  save$: Observable<Action> = this.actions$.pipe(
    ofType(CounterActions.CounterActionTypes.SAVE),
    withLatestFrom(this.store.pipe(select(selectCounterState))),
    tap(([action, state]) => localStorage.setItem('triangle-counter-count', state.counter.value.toString())),
    map((data) => new CounterActions.SaveSuccess()),
  );
}
