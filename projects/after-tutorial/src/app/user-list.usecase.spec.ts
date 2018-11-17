import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserListUsecase } from './user-list.usecase';

describe('UserListUsecase', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const usecase: UserListUsecase = TestBed.get(UserListUsecase);
    expect(usecase).toBeTruthy();
  });

  it('#fetchUsers', () => {
    const usecase: UserListUsecase = TestBed.get(UserListUsecase);
    const targetUrl = 'https://jsonplaceholder.typicode.com/users';
    usecase.fetchUsers();
    const req = httpTestingController.expectOne(targetUrl);

    expect(req.request.method).toEqual('GET');
    expect(req.request.url).toEqual(targetUrl);
  });
});
