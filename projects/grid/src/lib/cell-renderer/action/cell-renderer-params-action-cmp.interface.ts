import { ICellRendererParams } from 'ag-grid-community';

export interface ICellRendererParamsActionCmp extends ICellRendererParams {
  viewClicked?: Function;
  editClicked?: Function;
  startClicked?: Function;
}
