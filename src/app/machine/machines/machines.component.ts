import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewMachineComponent} from '../new-machine/new-machine.component';
import {HttpClient} from '@angular/common/http';
import {MachineService} from '../../core/services/machine.service';
import {Machine} from '../../core/models/machine';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {$t} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss'],
  providers: [DatePipe]
})
export class MachinesComponent implements OnInit, OnDestroy {

  private machines: Machine[];

  private searchForm = {
    name: null,
    status: null,
    dateFrom: null,
    dateTo: null
  };

  private timer;

  constructor(public dialog: MatDialog,
              private machineService: MachineService,
              private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.get();

    this.timer = setInterval(() => {
      this.get();
    }, 1*1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  resetSearch() {
    this.searchForm = {
      name: null,
      status: null,
      dateFrom: null,
      dateTo: null
    };
  }

  get() {
    let searchForm = {};

    for(let key in this.searchForm){
      if(this.searchForm[key] == null) {
        continue;
      }
      searchForm[key] = this.searchForm[key];
      if(searchForm[key] instanceof Date) {
        searchForm[key] = this.datePipe.transform(searchForm[key], 'yyyy-MM-dd');
      }
    }
    this.machineService.get(searchForm)
      .subscribe(
        machines => this.machines = machines,
        err => console.log(err)
      );
  }

  delete(machine: Machine) {
    this.machineService.delete(machine).subscribe(
      res => this.get(),
      err => console.log(err)
    );
  }

  start(machine: Machine) {
    this.machineService.start(machine).subscribe(
      res => this.get(),
      err => console.log(err)
    );
  }

  stop(machine: Machine) {
    this.machineService.stop(machine).subscribe(
      res => this.get(),
      err => console.log(err)
    );
  }

  restart(machine: Machine) {
    this.machineService.restart(machine).subscribe(
      res => this.get(),
      err => console.log(err)
    );
  }

  openNewMachineModal() {
    const dialogRef = this.dialog.open(NewMachineComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.get();
    });
  }
}
