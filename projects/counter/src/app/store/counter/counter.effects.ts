import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mergeMap, map, tap, withLatestFrom } from 'rxjs/operators';

import * as CounterActions from './counter.actions';
import { CounterState } from '../../models/counter-state';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions, private store: Store<CounterState>) {}

  @Effect()
  restore$: Observable<Action> = this.actions$.pipe(
    ofType(CounterActions.CounterActionTypes.RESTORE),
    mergeMap(_ =>
      of(+localStorage.getItem('triangle-counter-count')).pipe(
        map(data => new CounterActions.RestoreSuccess(data)),
      ),
    ),
  );

  @Effect()
  save$: Observable<Action> = this.actions$.pipe(
    ofType(CounterActions.CounterActionTypes.SAVE),
    withLatestFrom(this.store),
    tap(([action, state]) => localStorage.setItem('triangle-counter-count', state.count.toString())),
    map(data => new CounterActions.SaveSuccess()),
  );
}
