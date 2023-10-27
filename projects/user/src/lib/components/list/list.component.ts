import { Component, OnInit } from '@angular/core';
import {
  ColDef,
  GridReadyEvent,
  ICellRendererParams,
  RowDoubleClickedEvent,
} from 'ag-grid-community';
import { INav } from 'projects/ui-tools/src/public-api';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  nav: INav[] = [
    {
      name: 'User Management',
      link: '',
      icon: 'people',
    },
  ];
  conDef: ColDef[] = [
    { field: 'id', sort: 'desc' },
    { field: 'name' },
    { field: 'email' },
    { field: 'mNumber' },
    { field: 'type' },
    { field: 'address.state', headerName: 'State' },
    { field: 'address.country', headerName: 'Country' },
    {
      field: 'action',
      cellRenderer: 'ActionComponent',
      cellRendererParams: {
        editClicked: (params: ICellRendererParams) => {
          this.editClicked(params);
        },
        viewClicked: (params: ICellRendererParams) => {
          this.viewClicked(params);
        },
      },
      filter: false,
      cellStyle: { overflow: 'visible' },
    },
  ];
  rowData$!: Observable<IUser[]>;
  constructor(private _userService: UserService, private _router: Router) {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = new Observable((observe) => {
      observe.next(this._userService.getList());
    });
    params.api.sizeColumnsToFit();
  }

  onRowDoubleClicked(row: RowDoubleClickedEvent) {
    const user: IUser = row.data;
    this._router.navigateByUrl('user/view/' + user.id);
  }

  editClicked(params: ICellRendererParams): void {
    const user: IUser = params.data;
    this._router.navigate(['user/edit', user.id]);
  }

  viewClicked(params: ICellRendererParams): void {
    const user: IUser = params.data;
    this._router.navigate(['user/view', user.id]);
  }
}
