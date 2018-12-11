import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { InscriptionOptions } from './inscriptionOptions';
import {Inscription} from '../inscription';

@Injectable({
  providedIn: 'root'
})
export class InscriptionOptionsService {

  baseUrl = 'http://dtsl.ehb.be/~anthony.moortgat/SP2/api/options';
  inscriptionOptionsArray: InscriptionOptions[];

  constructor(private http: HttpClient) { }
  getAll(): Observable<InscriptionOptions[]> {
    return this.http.get(`${this.baseUrl}/inscriptionOptionsGetAll.php`).pipe(
      map((res) => {
        this.inscriptionOptionsArray = res['data'];
        return this.inscriptionOptionsArray;
      }),
      catchError(this.handleError));
  }

  update(inscriptionOption: InscriptionOptions): Observable<InscriptionOptions[]> {
    return this.http.put(`${this.baseUrl}/inscriptionOptionsUpdate.php`, { data: inscriptionOption })
      .pipe(map((res) => {
          const theInscriptionOption = this.inscriptionOptionsArray.find((item) => {
            return +item['organisationId'] === +inscriptionOption['organisationId'];
          });
          if (theInscriptionOption) {
            theInscriptionOption['firstName'] = inscriptionOption['firstName'];
            theInscriptionOption['lastName'] = inscriptionOption['lastName'];
            theInscriptionOption['phoneNumber'] = inscriptionOption['phoneNumber'];
            theInscriptionOption['allergy'] = inscriptionOption['allergy'];
            theInscriptionOption['physicalLimitation'] = inscriptionOption['physicalLimitation'];
            theInscriptionOption['birthdate'] = inscriptionOption['birthdate'];
            theInscriptionOption['gender'] = inscriptionOption['gender'];
            theInscriptionOption['email'] = inscriptionOption['email'];
          }
          return this.inscriptionOptionsArray;
        }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
