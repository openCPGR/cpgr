import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererParamsActionCmp } from './cell-renderer-params-action-cmp.interface';

@Component({
  selector: 'lib-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements ICellRendererAngularComp {
  params!: ICellRendererParamsActionCmp;

  constructor() {}

  agInit(param: ICellRendererParams<any, any, any>): void {
    this.params = param;
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }

  viewClicked() {
    if (this.params?.viewClicked) {
      this.params.viewClicked(this.params);
    }
  }

  editClicked() {
    if (this.params?.editClicked) {
      this.params.editClicked(this.params);
    }
  }
}
