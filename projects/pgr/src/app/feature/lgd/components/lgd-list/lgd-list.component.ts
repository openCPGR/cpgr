import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { INav } from 'projects/ui-tools/src/public-api';
import { Observable } from 'rxjs';
import { LgdService } from '../../services/lgd.service';
import {
  IPaginationFunction,
  IPaginationParams,
} from 'projects/grid/src/lib/interfaces/pagination-params.interface';

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
    { field: 'state_census2011_code', sort: 'asc', headerName: 'State Code' },
    { field: 'state_name_english', headerName: 'State Name' },
    {
      field: 'state_or_ut',
      headerName: 'State/Union territory(UT)',
      cellRenderer: (params: ICellRendererParams) => {
        return params.value === 'S' ? 'State' : 'UT';
      },
    },
    { field: 'last_updated', headerName: 'Last Updated' },
  ];
  rowData$!: Observable<any[]>;
  getRows: IPaginationFunction = (params: IPaginationParams): void => {
    this.rowData$ = this._lgd.getStates(params.offset, params.limit);
    console.log(params);
  };
  constructor(private _lgd: LgdService) {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this._lgd.getStates(0, 10);
    params.api.sizeColumnsToFit();
  }
}
