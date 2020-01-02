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
  MatInputModule, MatNativeDateModule, MatSelectModule
} from '@angular/material';
import { NewMachineComponent } from './new-machine/new-machine.component';
import { MachinesComponent } from './machines/machines.component';
import {FormsModule} from '@angular/forms';

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
    MatNativeDateModule
  ],
  entryComponents: [NewMachineComponent]
})
export class MachineModule { }
