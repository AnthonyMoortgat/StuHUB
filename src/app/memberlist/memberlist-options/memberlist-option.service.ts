import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { MemberlistOptions } from './memberlistOptions';


@Injectable({
  providedIn: 'root'
})
export class MemberlistOptionService {

  baseUrl = 'http://dtsl.ehb.be/~anthony.moortgat/SP2/api/Memberlist/Options';
  memberlistOptionsArray: MemberlistOptions[];

  constructor(private http: HttpClient) { }

  userID = sessionStorage.getItem('Orgname');

  getAll(): Observable<MemberlistOptions[]> {
    const params = new HttpParams().set('id', this.userID);

    return this.http.get(`${this.baseUrl}/memberlistOptionsGetAll.php`, {params: params}).pipe(
      map((res) => {
        this.memberlistOptionsArray = res['data'];
        return this.memberlistOptionsArray;
      }),
      catchError(this.handleError));
  }

  update(memberlistOption: MemberlistOptions): Observable<MemberlistOptions[]> {
    const params = new HttpParams().set('id', this.userID);

    return this.http.put(`${this.baseUrl}/memberlistOptionsUpdate.php`, { data: memberlistOption }, {params: params})
      .pipe(map((res) => {
          const theMemberlistOption = this.memberlistOptionsArray.find((item) => {
            return +item['organisationId'] === +memberlistOption['organisationId'];
          });
          if (theMemberlistOption) {
            theMemberlistOption['firstName'] = memberlistOption['firstName'];
            theMemberlistOption['lastName'] = memberlistOption['lastName'];
            theMemberlistOption['rol'] = memberlistOption['phoneNumber'];
            theMemberlistOption['birthdate'] = memberlistOption['birthdate'];
            theMemberlistOption['email'] = memberlistOption['allergy'];
            theMemberlistOption['organisation'] = memberlistOption['organisation'];
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
