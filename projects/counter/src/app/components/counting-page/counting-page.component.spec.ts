import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { RootStoreModule, RootStoreState, CounterStoreActions } from '../../root-store';
import { CountingPageComponent } from './counting-page.component';

describe('CountingPageComponent', () => {
  let component: CountingPageComponent;
  let fixture: ComponentFixture<CountingPageComponent>;
  let store: Store<RootStoreState.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RootStoreModule],
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
    const action = new CounterStoreActions.Increment();

    component.increment();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch the action to Decrement()', () => {
    const action = new CounterStoreActions.Decrement();

    component.decrement();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch the action to Reset()', () => {
    const action = new CounterStoreActions.Reset(0);

    component.reset();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch the action to Save()', () => {
    const action = new CounterStoreActions.Save();

    component.save();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
