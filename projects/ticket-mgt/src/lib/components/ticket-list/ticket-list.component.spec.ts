import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketListComponent } from './ticket-list.component';
import { TicketMgtService } from '../../services/ticket-mgt.service';
import { Router } from '@angular/router';
import { UIToolsModule } from 'projects/ui-tools/src/public-api';
import { GridModule } from 'projects/grid/src/public-api';
import {
  GridReadyEvent,
  ICellRendererParams,
  RowDoubleClickedEvent,
} from 'ag-grid-community';

describe('TicketListComponent', () => {
  let component: TicketListComponent;
  let fixture: ComponentFixture<TicketListComponent>;
  let ticketServiceSpy: jasmine.SpyObj<TicketMgtService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl', 'navigate']);
    ticketServiceSpy = jasmine.createSpyObj('TicketMgtService', ['getList']);
    await TestBed.configureTestingModule({
      imports: [UIToolsModule, GridModule],
      declarations: [TicketListComponent],
      providers: [
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
    fixture = TestBed.createComponent(TicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update row data on grid ready', () => {
    component.onGridReady({
      api: { sizeColumnsToFit: () => {} },
    } as GridReadyEvent);
    expect(component.rowData$).toBeTruthy();
  });

  it('should view ticket on onRowDoubleClicked', () => {
    component.onRowDoubleClicked({ data: {} } as RowDoubleClickedEvent);
    expect(routerSpy.navigateByUrl).toHaveBeenCalled();
  });

  it('should edit ticket on edit action click', () => {
    component.editClick({ data: {} } as ICellRendererParams);
    expect(routerSpy.navigate).toHaveBeenCalled();
  });

  it('should view ticket on view action click', () => {
    component.viewClick({ data: {} } as ICellRendererParams);
    expect(routerSpy.navigateByUrl).toHaveBeenCalled();
  });
});
