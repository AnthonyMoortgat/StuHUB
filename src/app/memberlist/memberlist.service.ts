import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import {Observable, throwError } from 'rxjs';
import {map, catchError } from 'rxjs/operators';

import {Member} from './member';
import {Inscription} from '../inscription/inscription';


@Injectable({
  providedIn: 'root'
})
export class MemberlistService {

  baseUrl = 'http://dtsl.ehb.be/~drilon.kryeziu/API';
  members: Member[];

    constructor(private http: HttpClient) { }

    getAll(): Observable<Member[]> {
    return this.http.get(`${this.baseUrl}/memberlistList.php`).pipe(
      map((res) => {
        this.members = res['data'];
        return this.members;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

  delete(id: number): Observable<Member[]> {
      const  params = new HttpParams().set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/delete`, { params: params })
      .pipe(map(res => {
          const filteredMembers = this.members.filter((member) => {
            return +member['id'] !== +id;
          });
          return this.members = filteredMembers;
        }),
        catchError(this.handleError));
  }

  store(member: Member): Observable<Member[]> {
    return this.http.post(`${this.baseUrl}/memberlistStore.php`, { data: member })
      .pipe(map((res) => {
          this.members.push(res['data']);
          return this.members;
        }),
        catchError(this.handleError));
  }
}