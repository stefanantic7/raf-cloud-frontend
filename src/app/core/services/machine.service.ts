import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Machine} from '../models/machine';
import {HttpClient, HttpResponse} from '@angular/common/http';

const SERVER_URL: string = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private http: HttpClient) { }

  get(machineFilter={}): Observable<Machine[]> {
    return this.http.get<Machine[]>(SERVER_URL+'/machines', {
      params: machineFilter
    })
  }

  delete(machine: Machine): Observable<Object> {
    return this.http.delete(SERVER_URL+`/machines/${machine.uid}`)
  }

  start(machine: Machine): Observable<Machine> {
    return this.http.post<Machine>(SERVER_URL+`/machines/${machine.uid}/start`, {});
  }

  stop(machine: Machine): Observable<Machine> {
    return this.http.post<Machine>(SERVER_URL+`/machines/${machine.uid}/stop`, {});
  }

  restart(machine: Machine): Observable<Machine> {
    return this.http.post<Machine>(SERVER_URL+`/machines/${machine.uid}/restart`, {});
  }

  create(name: string): Observable<Machine> {
    return this.http.post<Machine>(SERVER_URL+`/machines`, {
      name: name
    });
  }
}
