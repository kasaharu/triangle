import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Counter } from '../../core/models';
import { RootStoreState, CounterStoreActions, CounterStoreSelectors } from '../../root-store';

@Component({
  selector: 'cnt-counting-page',
  templateUrl: './counting-page.component.html',
  styleUrls: ['./counting-page.component.scss'],
})
export class CountingPageComponent implements OnInit {
  // counter$: Observable<Counter>;
  counter$: any;

  constructor(private store: Store<RootStoreState.State>) {
    this.counter$ = store.pipe(select(CounterStoreSelectors.selectCounterState));
  }

  ngOnInit() {
    // this.restore();
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
