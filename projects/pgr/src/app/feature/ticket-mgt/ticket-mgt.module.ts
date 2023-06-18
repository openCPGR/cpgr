import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { RouterModule, Routes } from '@angular/router';
import { GridModule } from 'projects/grid/src/public-api';

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
    GridModule,
    RouterModule.forChild(routes)
  ]
})
export class TicketMgtModule { }
