import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from './core/services/auth-guard.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './core/interceptors/token.interceptor';


const routes: Routes = [
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
