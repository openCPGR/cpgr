import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITicket } from '../../interface/ticket.interface';
import { TicketMgtService } from '../../services/ticket-mgt.service';
import { INav } from 'projects/pgr/src/app/layout/components/sidebar/nav.interface';

@Component({
  selector: 'lib-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.scss'],
})
export class TicketViewComponent implements OnInit {
  nav: INav[] = [
    {
      name: 'Ticket Management',
      link: '/tickets',
      icon: 'ticket-detailed',
    },
    {
      name: 'View',
      link: '',
      icon: 'ticket-detailed',
    },
  ];
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
