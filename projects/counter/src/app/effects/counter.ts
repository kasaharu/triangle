import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

import * as CounterActions from '../actions/counter';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  restore$: Observable<Action> = this.actions$.pipe(
    ofType(CounterActions.CounterActionTypes.RESTORE),
    mergeMap(_ =>
      of(+localStorage.getItem('triangle-counter-count')).pipe(
        map(data => new CounterActions.RestoreSuccess(data)),
      ),
    ),
  );
}
