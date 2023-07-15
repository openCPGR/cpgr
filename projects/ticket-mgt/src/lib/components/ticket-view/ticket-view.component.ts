import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITicket } from '../../interfaces/ticket.interaface';
import { TicketMgtService } from '../../services/ticket-mgt.service';

@Component({
  selector: 'lib-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.scss'],
})
export class TicketViewComponent implements OnInit {
  ticket: ITicket | undefined = undefined;
  constructor(
    private _route: ActivatedRoute,
    private _ticketService: TicketMgtService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((data) => {
      this.getTicket(data['id']);
    });
  }

  getTicket(id: string) {
    this.ticket = this._ticketService.getTicket(id);
  }
}
