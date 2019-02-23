import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CounterStoreActions, CounterStoreSelectors, CounterStoreState, RootStoreState } from '../../root-store';

@Component({
  selector: 'cnt-counting-page',
  templateUrl: './counting-page.component.html',
  styleUrls: ['./counting-page.component.scss'],
})
export class CountingPageComponent implements OnInit {
  counter$: Observable<CounterStoreState.State>;

  constructor(private store: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.counter$ = this.store.pipe(select(CounterStoreSelectors.selectCounterState));
    this.restore();
  }

  restore() {
    this.store.dispatch(new CounterStoreActions.Restore());
  }

  increment() {
    this.store.dispatch(new CounterStoreActions.Increment());
  }

  decrement() {
    this.store.dispatch(new CounterStoreActions.Decrement());
  }

  reset() {
    this.store.dispatch(new CounterStoreActions.Reset(0));
  }

  save() {
    this.store.dispatch(new CounterStoreActions.Save());
  }
}
