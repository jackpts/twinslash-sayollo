import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from "./guards/login.guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule),
    canActivate: [LoginGuard],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
