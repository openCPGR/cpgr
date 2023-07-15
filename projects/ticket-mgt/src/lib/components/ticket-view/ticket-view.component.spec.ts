import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketViewComponent } from './ticket-view.component';
import { TicketMgtService } from '../../services/ticket-mgt.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UIToolsModule } from 'projects/ui-tools/src/public-api';
import { RouterTestingModule } from '@angular/router/testing';

describe('TicketViewComponent', () => {
  let component: TicketViewComponent;
  let fixture: ComponentFixture<TicketViewComponent>;
  let ticketServiceSpy: jasmine.SpyObj<TicketMgtService>;
  let routeMock: Partial<ActivatedRoute>;

  routeMock = {
    params: new BehaviorSubject({ id: 1 }),
  };

  beforeEach(async () => {
    ticketServiceSpy = jasmine.createSpyObj('TicketMgtService', ['getTicket']);
    await TestBed.configureTestingModule({
      imports: [UIToolsModule, RouterTestingModule],
      declarations: [TicketViewComponent],
      providers: [
        {
          provide: TicketMgtService,
          useValue: ticketServiceSpy,
        },
        {
          provide: ActivatedRoute,
          useValue: routeMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
