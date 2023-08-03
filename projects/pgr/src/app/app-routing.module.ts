import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./feature/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./feature/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'tickets',
    loadChildren: () =>
      import('projects/ticket-mgt/src/public-api').then(
        (m) => m.TicketMgtModule
      ),
  },
  {
    path: 'map',
    loadChildren: () =>
      import('projects/map/src/public-api').then((m) => m.MapModule),
  },
  {
    path: 'lgd',
    loadChildren: () =>
      import('./feature/lgd/lgd.module').then((m) => m.LgdModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
