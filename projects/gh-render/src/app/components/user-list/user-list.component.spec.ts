import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of as observableOf } from 'rxjs';

import { UseListComponent } from './user-list.component';
import { UserService } from '../../services/user.service';

describe('UseListComponent', () => {
  let component: UseListComponent;
  let fixture: ComponentFixture<UseListComponent>;
  let userServive: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UseListComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userServive = TestBed.get(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#fetchUserList', () => {
    const userList = [
      { id: 1, login: 'test' },
    ];

    spyOn(userServive, 'fetchGitHubUserList').and.returnValue(observableOf(userList));
    component.fetchUserList();
    expect(component.userList).toBeTruthy(userList);
  });
});
