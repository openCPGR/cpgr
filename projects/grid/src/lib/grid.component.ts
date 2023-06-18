import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild , Input} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, CellClickedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-grid',
  templateUrl:'./grid.component.html',
  styleUrls:['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() columnDefs: ColDef[] = [
    { field: 'make'},
    { field: 'model'},
    { field: 'price' },
    { field: 'name' }
  ];

  @Input() rowData$!: Observable<any[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  
  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;


  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
      // params.api.sizeColumnsToFit()
  }

  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

}
