import { Component, OnInit } from '@angular/core';
import { TicketMgtService } from '../../services/ticket-mgt.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { INav } from 'projects/pgr/src/app/layout/components/sidebar/nav.interface';
import { Location } from '@angular/common';
import { ITicket } from '../../interface/ticket.interface';

@Component({
  selector: 'lib-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.scss'],
})
export class TicketCreateComponent implements OnInit {
  nav: INav[] = [
    {
      name: 'Ticket Management',
      link: '/tickets',
      icon: 'ticket-detailed',
    },
    {
      name: 'Create',
      link: '',
      icon: 'ticket-detailed',
    },
  ];

  ticket = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required),
    check: new FormControl(false, Validators.required),
  });
  isEdit: boolean = false;
  constructor(
    private _ticketService: TicketMgtService,
    private _router: Router,
    private _location: Location
  ) {}

  ngOnInit(): void {
    const editTicket: ITicket = this._location.getState() as ITicket;
    if (editTicket.id) {
      this.isEdit = true;
      this.ticket.patchValue(editTicket);
    }
  }

  createTicket() {
    if (this.isEdit) {
      this._ticketService.update(this.ticket.value);
    } else {
      this._ticketService.create({
        ...this.ticket.value,
        id: '' + (this._ticketService.getList().length + 1),
      });
    }

    this._router.navigateByUrl('tickets');
  }
}
