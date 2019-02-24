import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { initialState, State } from '../state';

@Injectable({
  providedIn: 'root',
})
export class Store {
  // tslint:disable-next-line:variable-name
  private _state$ = new BehaviorSubject<State>(initialState);

  constructor() {}

  update(fn: (state: State) => State) {
    const current = this._state$.value;
    this._state$.next(fn(current));
  }

  select<T>(selector: (state: State) => T) {
    return this._state$.pipe(map(selector));
  }
}
