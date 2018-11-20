import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BehaviorSubject, of as observableOf } from 'rxjs';

import { AppComponent } from './app.component';
import { UserListUsecase } from './user-list.usecase';
import { User } from './user';

describe('AppComponent', () => {
  let userListUsecase: UserListUsecase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    userListUsecase = TestBed.get(UserListUsecase);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
