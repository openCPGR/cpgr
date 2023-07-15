import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  GridReadyEvent,
  ICellRendererParams,
  RowClickedEvent,
  RowDoubleClickedEvent,
} from 'ag-grid-community';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridComponent],
      imports: [HttpClientTestingModule, AgGridModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit gridReady', () => {
    spyOn(component.onGridReady, 'emit');
    component.gridReady({} as GridReadyEvent);
    expect(component.onGridReady.emit).toHaveBeenCalled();
  });

  it('should emit rowClicked', () => {
    spyOn(component.onRowClicked, 'emit');
    component.rowClicked({} as RowClickedEvent);
    expect(component.onRowClicked.emit).toHaveBeenCalled();
  });

  it('should emit rowDoubleClicked', () => {
    spyOn(component.onRowDoubleClicked, 'emit');
    component.rowDoubleClicked({} as RowDoubleClickedEvent);
    expect(component.onRowDoubleClicked.emit).toHaveBeenCalled();
  });
});
