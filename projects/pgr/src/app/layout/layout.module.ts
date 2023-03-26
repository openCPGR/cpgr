import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';



@NgModule({
  declarations: [
    LayoutComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
