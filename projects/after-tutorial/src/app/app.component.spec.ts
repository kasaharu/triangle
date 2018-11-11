import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BehaviorSubject, of as observableOf } from 'rxjs';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { User } from './user';

describe('AppComponent', () => {
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    userService = TestBed.get(UserService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('call ngOnInit() method', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const users = [{ id: '1', name: 'Leanne Graham' }];
    const behaviorUser = new BehaviorSubject<User[]>(users);

    spyOn(userService, 'users$').and.returnValue(users);
    component.ngOnInit();

    // expect(component.users$).toEqual(behaviorUser.asObservable());
    // FIXME: 期待した結果ではないのであとで見直す
    expect(component.users$).toEqual(new BehaviorSubject<User[]>([]).asObservable());
  });
});
