import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCreateComponent } from './ticket-create.component';
import { TicketMgtService } from '../../services/ticket-mgt.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UIToolsModule } from 'projects/ui-tools/src/public-api';
import { BehaviorSubject } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('TicketCreateComponent', () => {
  let component: TicketCreateComponent;
  let fixture: ComponentFixture<TicketCreateComponent>;
  let ticketServiceSpy: jasmine.SpyObj<TicketMgtService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let locationSpy: jasmine.SpyObj<Location>;
  let routeMock: Partial<ActivatedRoute>;
  let routeSpy: jasmine.SpyObj<ActivatedRoute>;

  routeMock = {
    params: new BehaviorSubject({ id: 1 }),
  };

  beforeEach(async () => {
    ticketServiceSpy = jasmine.createSpyObj('TicketMgtService', [
      'getList',
      'update',
      'create',
    ]);
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    locationSpy = jasmine.createSpyObj('Location', ['getState']);
    routeSpy = jasmine.createSpyObj('ActivatedRoute', ['params']);
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
        {
          provide: Router,
          useValue: routerSpy,
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
