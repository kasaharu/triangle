import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserListUsecase } from './user-list.usecase';

describe('UserListUsecase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  it('should be created', () => {
    const usecase: UserListUsecase = TestBed.get(UserListUsecase);
    expect(usecase).toBeTruthy();
  });
});
