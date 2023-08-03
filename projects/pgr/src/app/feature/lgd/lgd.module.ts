import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LgdListComponent } from './components/lgd-list/lgd-list.component';
import { RouterModule, Routes } from '@angular/router';
import { GridModule } from 'projects/grid/src/public-api';
import { UIToolsModule } from 'projects/ui-tools/src/public-api';

const routes: Routes = [
  {
    path: '',
    component: LgdListComponent,
  },
];

@NgModule({
  declarations: [LgdListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), GridModule, UIToolsModule],
})
export class LgdModule {}
