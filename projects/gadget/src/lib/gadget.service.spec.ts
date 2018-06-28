import { TestBed, inject } from '@angular/core/testing';

import { GadgetService } from './gadget.service';

describe('GadgetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GadgetService]
    });
  });

  it('should be created', inject([GadgetService], (service: GadgetService) => {
    expect(service).toBeTruthy();
  }));
});
