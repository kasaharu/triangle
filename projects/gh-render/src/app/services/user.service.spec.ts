import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('#fetchGitHubUserList', inject([UserService], (service: UserService) => {
    service.fetchGitHubUserList().subscribe();
    const req = httpTestingController.expectOne(service.targetUrl);

    expect(req.request.method).toEqual('GET');
    expect(req.request.url).toEqual('https://api.github.com/users');
  }));

  it('#fetchUserDetail', inject([UserService], (service: UserService) => {
    const userName = 'kasaharu';
    service.fetchUserDetail(userName).subscribe();
    const req = httpTestingController.expectOne(`${service.targetUrl}/${userName}`);

    expect(req.request.method).toEqual('GET');
    expect(req.request.url).toEqual('https://api.github.com/users/kasaharu');
  }));
});
