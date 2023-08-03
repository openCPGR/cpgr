import { TestBed } from '@angular/core/testing';

import { LgdService } from './lgd.service';

describe('LgdService', () => {
  let service: LgdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LgdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
