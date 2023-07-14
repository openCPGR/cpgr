import { Injectable } from '@angular/core';
import { ITicket } from '../interfaces/ticket.interaface';

@Injectable({
  providedIn: 'root'
})
export class TicketMgtService {

  private tickets : ITicket[] =[{
    id:'1',
    name:'Water leakage at Sangam Nagar',
    description :'Near Sangam Nager on road side there is water leakage',
    type:'Internal'
  },{
    id:'2',
    name:'Electricity issue at Makhani',
    description :'Its a time of summer exam, students are paparing for final example requesting authorities ro reduce load setting',
    type:'Internal'
  }];
  constructor() { }

  create(ticket:ITicket){
    this.tickets.push(ticket);
  }

  getList(): ITicket[]{
    return this.tickets;
  }

}
