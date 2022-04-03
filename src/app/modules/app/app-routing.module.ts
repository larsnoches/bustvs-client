import * as coreComponents from '@modules/core/components';
import {
  BusPointFormPageComponent,
  BusPointsPageComponent,
} from '@modules/buspoints/components';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@modules/core/guards/auth/auth.guard';
import { BusPointTypesPageComponent } from '@modules/buspoint-types/components';
import { NgModule } from '@angular/core';

const buspointRoutes: Routes = [
  {
    path: '',
    component: BusPointsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'form',
    component: BusPointFormPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'form/:id',
    component: BusPointFormPageComponent,
    canActivate: [AuthGuard],
  },
];

const routes: Routes = [
  {
    path: '',
    component: coreComponents.HomePageComponent,
  },
  {
    path: 'buspoint-types',
    component: BusPointTypesPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'buspoints',
    // component: BusPointsPageComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: buspointRoutes,
  },
  {
    path: 'logout',
    component: coreComponents.LogoutPageComponent,
  },
  {
    path: 'callback',
    component: coreComponents.RedirectPageComponent,
  },
  {
    path: '**',
    component: coreComponents.NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
