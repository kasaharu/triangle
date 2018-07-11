import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CounterState } from '../../models/counter-state';
import { CounterActionTypes } from '../../actions/counter';

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
  }

  increment() {
    this.store.dispatch({ type: CounterActionTypes.INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: CounterActionTypes.DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: CounterActionTypes.RESET });
  }
}
