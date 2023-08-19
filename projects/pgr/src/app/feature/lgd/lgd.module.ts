import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { LgdListComponent } from './components/lgd-list/lgd-list.component';
import { RouterModule, Routes } from '@angular/router';
import { GridModule } from 'projects/grid/src/public-api';
import { UIToolsModule } from 'projects/ui-tools/src/public-api';
import {
  districtColDef,
  stateColDef,
  subdistrictColDef,
} from './constants/col-def.constant';

const routes: Routes = [
  {
    path: '',
    component: LgdListComponent,
    data: {
      api: 'a71e60f0-a21d-43de-a6c5-fa5d21600cdb',
    },
  },
  {
    path: ':state',
    component: LgdListComponent,
    data: {
      api: '37231365-78ba-44d5-ac22-3deec40b9197',
      type: 'district',
      colDef: [stateColDef],
    },
  },
  {
    path: ':state/:district',
    component: LgdListComponent,
    data: {
      api: '6be51a29-876a-403a-a6da-42fde795e751',
      type: 'subdistrict',
      colDef: [districtColDef, stateColDef],
    },
  },
  {
    path: ':state/:district/:subdistrict',
    component: LgdListComponent,
    data: {
      api: 'f17a1608-5f10-4610-bb50-a63c80d83974',
      type: 'village',
      colDef: [subdistrictColDef, districtColDef, stateColDef],
    },
  },
];

@NgModule({
  declarations: [LgdListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GridModule,
    UIToolsModule,
  ],
  providers: [TitleCasePipe],
})
export class LgdModule {}
