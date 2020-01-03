import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatDialogModule, MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, MatMenuModule, MatNativeDateModule, MatSelectModule
} from '@angular/material';
import { NewMachineComponent } from './new-machine/new-machine.component';
import { MachinesComponent } from './machines/machines.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuardService} from '../core/services/auth-guard.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from '../core/interceptors/token.interceptor';

const routes: Routes = [
  {
    path: '',
    component: MachinesComponent,
  }
];

@NgModule({
  declarations: [NewMachineComponent, MachinesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    ReactiveFormsModule
  ],
  entryComponents: [NewMachineComponent],
  providers: [

  ],
})
export class MachineModule { }
