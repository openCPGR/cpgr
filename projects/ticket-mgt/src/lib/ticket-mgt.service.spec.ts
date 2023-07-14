import { TestBed } from '@angular/core/testing';

import { TicketMgtService } from './services/ticket-mgt.service';

describe('TicketMgtService', () => {
  let service: TicketMgtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketMgtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
