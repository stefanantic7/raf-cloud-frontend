import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from './core/services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'machines',
    pathMatch: 'full'
  },
  {
    path: 'machines',
    loadChildren: './machine/machine.module#MachineModule',
    canLoad: [AuthGuardService]
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
