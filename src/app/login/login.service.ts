import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from './login';
import {NULL_INJECTOR} from '@angular/core/src/render3/component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://dtsl.ehb.be/~michael.de.gauquier/SP2/api';
  logins: User[] = new Array(0);

  constructor(private http: HttpClient) { }
/*
  getAll(): Observable<User[]> {
    return this.http.get(`${this.baseUrl}/loginUser.php`).pipe(
      map((res) => {
        this.logins = res['data'];
        return this.logins;
      }),
      catchError(this.handleError));
  }
*/
  store(login: User): Observable<User[]> {
    return this.http.post(`${this.baseUrl}/loginUser.php`, {data: login})
      .pipe(map((res) => {
          this.logins.push(res['data']);
          return this.logins;
      }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error! something went wrong.');
  }
}
