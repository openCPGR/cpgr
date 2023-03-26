import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedComponent } from './component/unauthorized/unauthorized.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UnauthorizedComponent,
  },
];

@NgModule({
  declarations: [UnauthorizedComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class AuthModule {}
