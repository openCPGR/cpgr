import { NgModule } from '@angular/core';
import { CreateComponent } from './components/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GetUserResolver } from './resolver/get-user.resolver';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateComponent,
        resolve: { user: GetUserResolver },
      },
    ]),
  ],
  exports: [],
})
export class UserModule {}
