import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MachineService} from '../../core/services/machine.service';

@Component({
  selector: 'app-new-machine',
  templateUrl: './new-machine.component.html',
  styleUrls: ['./new-machine.component.scss']
})
export class NewMachineComponent implements OnInit {

  private name: string;

  constructor(public dialogRef: MatDialogRef<NewMachineComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private machineService: MachineService) {
  }

  ngOnInit() {
  }

  createMachine(): void {
    console.log(this.name);
    this.machineService.create(this.name).subscribe(
      res => this.dialogRef.close(),
      err => console.error(err)
    );
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
