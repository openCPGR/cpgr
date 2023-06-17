import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  component: TicketListComponent
}]

@NgModule({
  declarations: [
    TicketListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TicketMgtModule { }
