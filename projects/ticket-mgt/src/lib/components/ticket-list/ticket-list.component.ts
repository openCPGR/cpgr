import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketMgtService } from '../../services/ticket-mgt.service';
import { ITicket } from '../../interfaces/ticket.interaface';
import { ColDef, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'lib-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  conDef: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'type' },
    { field: 'description' },
    {
      field: 'action',
      cellRenderer: 'ActionComponent',
      // cellClass: 'overflow-v',
      filter: false,
    },
  ];
  rowData$!: Observable<ITicket[]>;
  constructor(private _ticketService: TicketMgtService) {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = new Observable((observe) => {
      observe.next(this._ticketService.getList());
    });
  }
}
