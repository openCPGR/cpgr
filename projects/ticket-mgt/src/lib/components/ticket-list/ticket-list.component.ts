import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketMgtService } from '../../services/ticket-mgt.service';
import { ITicket } from '../../interfaces/ticket.interaface';
import {
  ColDef,
  GridReadyEvent,
  RowClickedEvent,
  RowDoubleClickedEvent,
} from 'ag-grid-community';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'lib-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  conDef: ColDef[] = [
    { field: 'id', sort: 'desc' },
    { field: 'name' },
    { field: 'type' },
    { field: 'description' },
    {
      field: 'action',
      cellRenderer: 'ActionComponent',
      filter: false,
      cellStyle: { overflow: 'visible' },
    },
  ];
  rowData$!: Observable<ITicket[]>;
  constructor(
    private _ticketService: TicketMgtService,
    private _router: Router,
    public location: Location
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
}
