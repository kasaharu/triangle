import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('#getUsers', () => {
    const service: UserService = TestBed.get(UserService);
    const targetUrl = 'https://jsonplaceholder.typicode.com/users';
    service.getUsers().subscribe();
    const req = httpTestingController.expectOne(targetUrl);

    expect(req.request.method).toEqual('GET');
    expect(req.request.url).toEqual(targetUrl);
  });
});
