import { NgModule } from '@angular/core';
import { GridComponent } from './grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    HttpClientModule
    
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule { }
