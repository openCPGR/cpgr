import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCreateComponent } from './ticket-create.component';
import { TicketMgtService } from '../../services/ticket-mgt.service';
import { Location } from '@angular/common';
import { UIToolsModule } from 'projects/ui-tools/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('TicketCreateComponent', () => {
  let component: TicketCreateComponent;
  let fixture: ComponentFixture<TicketCreateComponent>;
  let ticketServiceSpy: jasmine.SpyObj<TicketMgtService>;
  let locationSpy: jasmine.SpyObj<Location>;

  beforeEach(async () => {
    ticketServiceSpy = jasmine.createSpyObj('TicketMgtService', [
      'getList',
      'update',
      'create',
    ]);
    locationSpy = jasmine.createSpyObj('Location', ['getState', 'back']);
    await TestBed.configureTestingModule({
      imports: [UIToolsModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [TicketCreateComponent],
      providers: [
        {
          provide: Location,
          useValue: locationSpy,
        },
        {
          provide: TicketMgtService,
          useValue: ticketServiceSpy,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCreateComponent);
    locationSpy.getState.and.returnValue({});
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check edit value', () => {
    locationSpy.getState.and.returnValue({ id: '1', name: 'abc' });
    component.ngOnInit();
    expect(component.isEdit).toBeTrue();
  });

  it('should create/update ticket', () => {
    locationSpy.getState.and.returnValue({ id: '1', name: 'abc' });
    component.ngOnInit();
    component.createTicket();
    expect(ticketServiceSpy.update).toHaveBeenCalled();
  });

  it('should create ticket', () => {
    ticketServiceSpy.getList.and.returnValue([]);
    component.isEdit = false;
    component.createTicket();
    expect(ticketServiceSpy.create).toHaveBeenCalled();
  });
  
});
