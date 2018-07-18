import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { counterReducer } from '../../store/counter/counter.reducers';
import * as CounterActions from '../../store/counter/counter.actions';

import { CounterState } from '../../models/counter-state';
import { CountingPageComponent } from './counting-page.component';

describe('CountingPageComponent', () => {
  let component: CountingPageComponent;
  let fixture: ComponentFixture<CountingPageComponent>;
  let store: Store<CounterState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ count: counterReducer }),
      ],
      declarations: [ CountingPageComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(CountingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch the action to Increment()', () => {
    const action = new CounterActions.Increment();

    component.increment();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch the action to Decrement()', () => {
    const action = new CounterActions.Decrement();

    component.decrement();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch the action to Reset()', () => {
    const action = new CounterActions.Reset(0);

    component.reset();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch the action to Save()', () => {
    const action = new CounterActions.Save();

    component.save();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
