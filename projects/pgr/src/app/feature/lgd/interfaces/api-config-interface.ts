import { ColDef } from 'ag-grid-community';

export interface IApiConfig {
  api: string;
  state: string;
  district: string;
  subdistrict: string;
  type: LGDType;
  colDef: ColDef[];
}

export type LGDType = 'state' | 'district' | 'subdistrict' | 'village';
