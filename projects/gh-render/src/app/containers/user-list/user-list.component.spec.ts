import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';

import { UseListComponent } from './user-list.component';
import { RootStoreModule, RootStoreState, UserStoreActions } from '../../root-store';

describe('UseListComponent', () => {
  let component: UseListComponent;
  let fixture: ComponentFixture<UseListComponent>;
  let store: Store<RootStoreState.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, RootStoreModule],
      declarations: [UseListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(UseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#fetchUserList', () => {
    const action = new UserStoreActions.FetchRequestAction();

    component.fetchUserList();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
