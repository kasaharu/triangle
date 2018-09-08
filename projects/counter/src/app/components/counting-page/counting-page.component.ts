import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../core/state';
import * as CounterActions from '../../store/counter/counter.actions';

@Component({
  selector: 'cnt-counting-page',
  templateUrl: './counting-page.component.html',
  styleUrls: ['./counting-page.component.scss'],
})
export class CountingPageComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<State>) {
    this.count$ = store.pipe(select('counter'));
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
