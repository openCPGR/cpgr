import { NgModule } from '@angular/core';
import { CreateComponent } from './components/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GetUserResolver } from './resolver/get-user.resolver';
import { ListComponent } from './components/list/list.component';
import { GridModule } from 'projects/grid/src/public-api';
import { UIToolsModule } from 'projects/ui-tools/src/public-api';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  declarations: [CreateComponent, ListComponent, ViewComponent],
  imports: [
    ReactiveFormsModule,
    UIToolsModule,
    GridModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'view/:id',
        component: ViewComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
        resolve: { user: GetUserResolver },
      },
      {
        path: 'edit/:id',
        component: CreateComponent,
        resolve: { user: GetUserResolver },
      },
    ]),
  ],
  exports: [],
})
export class UserModule {}
