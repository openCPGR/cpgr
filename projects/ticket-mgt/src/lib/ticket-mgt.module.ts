import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { GridModule } from 'projects/grid/src/public-api';
import { TicketCreateComponent } from './components/ticket-create/ticket-create.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TicketListComponent,
  },
  {
    path: 'create',
    component: TicketCreateComponent,
  },
];

@NgModule({
  declarations: [TicketListComponent, TicketCreateComponent],
  imports: [RouterModule.forChild(routes), GridModule, ReactiveFormsModule],
  exports: [TicketListComponent],
})
export class TicketMgtModule {}
