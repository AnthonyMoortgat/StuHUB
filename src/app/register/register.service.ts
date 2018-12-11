import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from './register';
import {NULL_INJECTOR} from '@angular/core/src/render3/component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = 'http://dtsl.ehb.be/~michael.de.gauquier/SP2/api';
  registers: User[] = new Array(0);

  constructor(private http: HttpClient) { }
  /*
  getAll(): Observable<User[]> {
    return this.http.get(`${this.baseUrl}/registerList.php`).pipe(
      map((res) => {
        this.registers = res['data'];
        return this.registers;
      }),
      catchError(this.handleError));
  }*/

  store(register: User): Observable<User[]> {
    return this.http.post(`${this.baseUrl}/registerStore.php`, {data: register})
      .pipe(map((res) => {
        this.registers.push(res['data']);
        return this.registers;
      }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error! something went wrong.');
  }
}
