import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { MemberlistOptions } from './memberlistOptions';


@Injectable({
  providedIn: 'root'
})
export class MemberlistOptionService {

  baseUrl = 'http://dtsl.ehb.be/~drilon.kryeziu/API/options';
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
          const theInscriptionOption = this.memberlistOptionsArray.find((item) => {
            return +item['organisationId'] === +memberlistOption['organisationId'];
          });
          if (theInscriptionOption) {
            theInscriptionOption['firstName'] = memberlistOption['firstName'];
            theInscriptionOption['lastName'] = memberlistOption['lastName'];
            theInscriptionOption['rol'] = memberlistOption['phoneNumber'];
            theInscriptionOption['email'] = memberlistOption['allergy'];
            theInscriptionOption['birthdate'] = memberlistOption['birthdate'];
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
