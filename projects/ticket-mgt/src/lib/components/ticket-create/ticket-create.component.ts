import { Component, OnInit } from '@angular/core';
import { TicketMgtService } from '../../services/ticket-mgt.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.scss'],
})
export class TicketCreateComponent implements OnInit {
  ticket = new FormGroup({
    name: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required),
    check: new FormControl(false, Validators.required),
  });
  constructor(
    private _ticketService: TicketMgtService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createTicket() {
    this._ticketService.create({
      ...this.ticket.value,
      id: this._ticketService.getList().length+1,
    });
    this.router.navigateByUrl('tickets');
  }
}
