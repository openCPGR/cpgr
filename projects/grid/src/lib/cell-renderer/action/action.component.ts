import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'lib-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements ICellRendererAngularComp  {

  constructor() { }

  agInit(params: ICellRendererParams<any, any, any>): void {
    
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }
}
