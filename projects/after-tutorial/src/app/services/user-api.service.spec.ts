import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserApiService } from './user-api.service';

describe('UserApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  it('should be created', () => {
    const service: UserApiService = TestBed.get(UserApiService);
    expect(service).toBeTruthy();
  });
});
