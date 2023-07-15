import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { GridModule } from 'projects/grid/src/public-api';
import { TicketCreateComponent } from './components/ticket-create/ticket-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketViewComponent } from './components/ticket-view/ticket-view.component';

const routes: Routes = [
  {
    path: '',
    component: TicketListComponent,
  },
  {
    path: 'create',
    component: TicketCreateComponent,
  },
  {
    path: 'view/:id',
    component: TicketViewComponent,
  },
];

@NgModule({
  declarations: [
    TicketListComponent,
    TicketCreateComponent,
    TicketViewComponent,
  ],
  imports: [RouterModule.forChild(routes), GridModule, ReactiveFormsModule],
  exports: [TicketListComponent],
})
export class TicketMgtModule {}
