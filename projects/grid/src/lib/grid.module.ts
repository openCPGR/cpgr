import { NgModule } from '@angular/core';
import { GridComponent } from './grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { ActionComponent } from './cell-renderer/action/action.component';



@NgModule({
  declarations: [
    GridComponent,
    ActionComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    HttpClientModule
    
  ],
  exports: [
    GridComponent,
    ActionComponent
  ]
})
export class GridModule { }
