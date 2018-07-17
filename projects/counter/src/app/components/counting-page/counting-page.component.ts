import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CounterState } from '../../models/counter-state';
import * as CounterActions from '../../store/counter.actions';

@Component({
  selector: 'cnt-counting-page',
  templateUrl: './counting-page.component.html',
  styleUrls: ['./counting-page.component.scss'],
})
export class CountingPageComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.store.dispatch(new CounterActions.Restore());
  }

  increment() {
    this.store.dispatch(new CounterActions.Increment());
  }

  decrement() {
    this.store.dispatch(new CounterActions.Decrement());
  }

  reset() {
    this.store.dispatch(new CounterActions.Reset(0));
  }

  save() {
    this.store.dispatch(new CounterActions.Save());
  }
}
