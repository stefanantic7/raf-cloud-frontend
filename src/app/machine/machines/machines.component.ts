import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewMachineComponent} from '../new-machine/new-machine.component';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openNewMachineModal() {
    const dialogRef = this.dialog.open(NewMachineComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
