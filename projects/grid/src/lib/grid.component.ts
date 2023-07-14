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
  CellClickedEvent,
  FrameworkComponentWrapper,
} from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ActionComponent } from './cell-renderer/action/action.component';

@Component({
  selector: 'lib-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() columnDefs: ColDef[] = [];

  @Input() rowData$!: Observable<any[]>;
  @Output() onGridReady = new EventEmitter<GridReadyEvent>();

  comp = { ActionComponent: ActionComponent };

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

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
}
