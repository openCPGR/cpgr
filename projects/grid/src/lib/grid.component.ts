import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ColDef,
  GridReadyEvent,
  IDatasource,
  RowClickedEvent,
  RowDoubleClickedEvent,
} from 'ag-grid-community';
import { Observable, repeat } from 'rxjs';
import { ActionComponent } from './cell-renderer/action/action.component';
import {
  IPaginationFunction,
  IPaginationParams,
} from './interfaces/pagination-params.interface';

@Component({
  selector: 'lib-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() columnDefs: ColDef[] = [];

  @Input() rowData$!: Observable<any[]>;
  @Output() onGridReady = new EventEmitter<GridReadyEvent>();
  @Output() onRowClicked = new EventEmitter<RowClickedEvent>();
  @Output() onRowDoubleClicked = new EventEmitter<RowDoubleClickedEvent>();
  comp = { ActionComponent: ActionComponent };

  @Input() getRows!: IPaginationFunction;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // Example load data from server
  gridReady(params: GridReadyEvent) {
    // this.rowData$ = this.http
    //   .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
    // params.api.sizeColumnsToFit()
    this.onGridReady.emit(params);
  }

  rowClicked(row: RowClickedEvent): void {
    this.onRowClicked.emit(row);
  }
  rowDoubleClicked(row: RowDoubleClickedEvent): void {
    this.onRowDoubleClicked.emit(row);
  }

  next(params: IPaginationParams) {
    this.getRows.call(this, params);
  }
}
