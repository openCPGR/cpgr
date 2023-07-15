import { TestBed } from '@angular/core/testing';

import { TicketMgtService } from './ticket-mgt.service';
import { ITicket } from '../interface/ticket.interface';

describe('TicketMgtService', () => {
  let service: TicketMgtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketMgtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should crete ticket', () => {
    service.create({ name: '1' } as ITicket);
    expect(service.getList().length).toBeTruthy();
  });

  it('should get ticket by id', () => {
    service.create({ name: '1', id: '123' } as ITicket);
    expect(service.getTicket('123')?.name).toEqual('1');
  });

  it('should update ticket', () => {
    service.create({ name: '1', id: '123' } as ITicket);
    service.update({ name: 'yash', id: '123' } as ITicket);
    expect(service.getTicket('123')?.name).toEqual('yash');
  });
});
