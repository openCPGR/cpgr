import { Component, OnInit } from '@angular/core';
import {
  ColDef,
  GridReadyEvent,
  ICellRendererParams,
  RowDoubleClickedEvent,
} from 'ag-grid-community';
import { INav } from 'projects/ui-tools/src/public-api';
import { Observable, catchError, map } from 'rxjs';
import { LgdService } from '../../services/lgd.service';
import {
  IPaginationFunction,
  IPaginationParams,
} from 'projects/grid/src/lib/interfaces/pagination-params.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { IApiConfig } from '../../interfaces/api-config-interface';
import { TitleCasePipe } from '@angular/common';

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

  apiConfig: IApiConfig = {
    api: '',
    state: '',
    district: '',
    subdistrict: '',
    type: 'state',
    colDef: [],
  };
  colDef: ColDef[] = [];
  rowData$!: Observable<any[]>;
  total = NaN;
  getRows: IPaginationFunction = (params: IPaginationParams): void => {
    this.rowData$ = this._lgd
      .getStates(this.apiConfig, params.offset, params.limit)
      .pipe(catchError((error) => []));
  };

  constructor(
    private _lgd: LgdService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _titleCase: TitleCasePipe
  ) {}

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      this.apiConfig.api = data['api'];
      this.apiConfig.type = data['type'] || 'state';
      this.apiConfig.colDef = data['colDef'] || [];
      this.nav[0].name +=
        ' / ' + this._titleCase.transform(this.apiConfig.type) + 's';
      this.colDef = this._lgd.getColDef(this.apiConfig);
    });
    this._route.params.subscribe((param) => {
      this.apiConfig.state = param['state'];
      this.apiConfig.district = param['district'];
      this.apiConfig.subdistrict = param['subdistrict'];
    });
  }

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this._lgd.getStateDetails(this.apiConfig).pipe(
      map((data) => {
        this.total = data.total;
        return data.records;
      })
    );
    params.api.sizeColumnsToFit();
  }

  onRowDoubleClicked(param: RowDoubleClickedEvent) {
    const stateCode = param.data['state_census2011_code'];
    const districtCode = param.data['district_census2011_code'];
    const subdistrictCode = param.data['subdistrict_census2011_code'];
    this._router.navigate(
      ['lgd', stateCode, districtCode, subdistrictCode].filter((item) => !!item)
    );
  }
}
