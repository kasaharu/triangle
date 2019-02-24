import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserDetailUsecase } from './user-detail.usecase';

describe('UserDetailUsecase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  it('should be created', () => {
    const service: UserDetailUsecase = TestBed.get(UserDetailUsecase);
    expect(service).toBeTruthy();
  });
});
