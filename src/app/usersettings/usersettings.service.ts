import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './usersettings';

@Injectable({
  providedIn: 'root'
})
export class UsersettingsService {

  baseUrl = 'http://dtsl.ehb.be/~michael.de.gauquier/SP2/api';
  usersettings: User[] = new Array(0);

  constructor(private http: HttpClient) {}

  orgname = sessionStorage.getItem('Orgname');

  getAll(): Observable<User[]> {
    const params = new HttpParams().set('org', this.orgname);

    return this.http.get(`${this.baseUrl}/userList.php`, {params: params}).pipe(
      map((res) => {
        this.usersettings = res['data'];
        return this.usersettings;
      }),
      catchError(this.handleError));
  }

  update(user: User): Observable<User[]> {
    const params = new HttpParams().set('org', this.orgname);

    return this.http.put(`${this.baseUrl}/userUpdate.php`, { data: user }, {params: params})
      .pipe(map((res) => {
          const theUser = this.usersettings.find((item) => {
            return +item['user_id'] === +user['user_id'];
          });
          if (theUser) {
            theUser['first_name'] = user['first_name'];
            theUser['last_name'] = user['last_name'];
            theUser['user_email'] = user['user_email'];
            theUser['user_password'] = user['user_password'];
            theUser['org_name'] = user['org_name'];
            theUser['db_name'] = user['db_name'];
          }
          return this.usersettings;
        }),
        catchError(this.handleError));
  }

  updatePass(user: User): Observable<User[]> {
    const params = new HttpParams().set('org', this.orgname);

    return this.http.put(`${this.baseUrl}/userPassUpdate.php`, { data: user }, {params: params})
      .pipe(map((res) => {
          const theUser = this.usersettings.find((item) => {
            return +item['user_id'] === +user['user_id'];
          });
          if (theUser) {
            theUser['first_name'] = user['first_name'];
            theUser['last_name'] = user['last_name'];
            theUser['user_email'] = user['user_email'];
            theUser['user_password'] = user['user_password'];
            theUser['new_password'] = user['new_password'];
            theUser['org_name'] = user['org_name'];
            theUser['db_name'] = user['db_name'];
          }
          return this.usersettings;
        }),
        catchError(this.handleError));
  }

  delete(user: User): Observable<User[]> {
    const params = new HttpParams().set('org', this.orgname);

    return this.http.put(`${this.baseUrl}/userDelete.php`, { data: user }, { params: params })
      .pipe(map(res => {
          const theUser = this.usersettings.find((item) => {
            return +item['user_id'] === +user['user_id'];
          });
          if (theUser) {
            theUser['user_password'] = user['user_password'];
          }
          return this.usersettings;
        }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error! something went wrong.');
  }
}
