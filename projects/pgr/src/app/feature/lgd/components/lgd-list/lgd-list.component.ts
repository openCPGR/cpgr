import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { INav } from 'projects/ui-tools/src/public-api';
import { Observable } from 'rxjs';
import { LgdService } from '../../services/lgd.service';

@Component({
  selector: 'pgr-lgd-list',
  templateUrl: './lgd-list.component.html',
  styleUrls: ['./lgd-list.component.scss'],
})
export class LgdListComponent implements OnInit {
  nav: INav[] = [
    {
      name: 'Local Government Directory',
      link: '',
      icon: 'card-checklist',
    },
  ];

  conDef: ColDef[] = [
    { field: '0', sort: 'asc', headerName: 'State Code' },
    { field: '1', headerName: 'State Name' },
    {
      field: '4',
      headerName: 'State/Union territory(UT)',
      cellRenderer: (params: ICellRendererParams) => {
        return params.value === 'S' ? 'State': 'UT';
      },
    },
    { field: '5', headerName: 'Last Updated' },
  ];
  rowData$!: Observable<any[]>;
  constructor(private _lgd: LgdService) {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = new Observable((observe) => {
      observe.next(this._lgd.getStates());
    });
    params.api.sizeColumnsToFit();
  }
}
