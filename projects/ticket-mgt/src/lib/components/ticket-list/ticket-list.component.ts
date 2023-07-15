import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketMgtService } from '../../services/ticket-mgt.service';
import { ITicket } from '../../interface/ticket.interface';
import {
  ColDef,
  GridReadyEvent,
  ICellRendererParams,
  RowDoubleClickedEvent,
} from 'ag-grid-community';
import { Router } from '@angular/router';
import { INav } from 'projects/ui-tools/src/public-api';

@Component({
  selector: 'lib-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  nav: INav[] = [
    {
      name: 'Ticket Management',
      link: '',
      icon: 'ticket-detailed',
    },
  ];
  conDef: ColDef[] = [
    { field: 'id', sort: 'desc' },
    { field: 'name' },
    { field: 'type' },
    { field: 'description' },
    {
      field: 'action',
      cellRenderer: 'ActionComponent',
      cellRendererParams: {
        editClicked: (params: ICellRendererParams) => {
          this.editClick(params);
        },
        viewClicked: (params: ICellRendererParams) => {
          this.viewClick(params);
        },
      },
      filter: false,
      cellStyle: { overflow: 'visible' },
    },
  ];
  rowData$!: Observable<ITicket[]>;
  constructor(
    private _ticketService: TicketMgtService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = new Observable((observe) => {
      observe.next(this._ticketService.getList());
    });
    params.api.sizeColumnsToFit();
  }

  onRowDoubleClicked(row: RowDoubleClickedEvent) {
    const ticket: ITicket = row.data;
    this._router.navigateByUrl('tickets/view/' + ticket.id);
  }

  editClick(params: ICellRendererParams): void {
    const ticket: ITicket = params.data;
    this._router.navigate(['tickets/create'], { state: ticket });
  }

  viewClick(params: ICellRendererParams): void {
    const ticket: ITicket = params.data;
    this._router.navigateByUrl('tickets/view/' + ticket.id);
  }
}
