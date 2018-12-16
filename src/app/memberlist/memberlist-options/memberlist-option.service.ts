import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { MemberlistOptions } from './memberlistOptions';


@Injectable({
  providedIn: 'root'
})
export class MemberlistOptionService {

  baseUrl = 'http://dtsl.ehb.be/~drilon.kryeziu/API/Options';
  memberlistOptionsArray: MemberlistOptions[];

  constructor(private http: HttpClient) { }
  getAll(): Observable<MemberlistOptions[]> {
    return this.http.get(`${this.baseUrl}/memberlistOptionsGetAll.php`).pipe(
      map((res) => {
        this.memberlistOptionsArray = res['data'];
        return this.memberlistOptionsArray;
      }),
      catchError(this.handleError));
  }
  update(memberlistOption: MemberlistOptions): Observable<MemberlistOptions[]> {
    return this.http.put(`${this.baseUrl}/memberlistOptionsUpdate.php`, { data: memberlistOption })
      .pipe(map((res) => {
          const theMemberlistOption = this.memberlistOptionsArray.find((item) => {
            return +item['organisationId'] === +memberlistOption['organisationId'];
          });
          if (theMemberlistOption) {
            theMemberlistOption['firstName'] = memberlistOption['firstName'];
            theMemberlistOption['lastName'] = memberlistOption['lastName'];
            theMemberlistOption['rol'] = memberlistOption['phoneNumber'];
            theMemberlistOption['email'] = memberlistOption['allergy'];
            theMemberlistOption['birthdate'] = memberlistOption['birthdate'];
          }
          return this.memberlistOptionsArray;
        }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
