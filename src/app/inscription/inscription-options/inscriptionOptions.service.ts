import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { InscriptionOptions } from './inscriptionOptions';

@Injectable({
  providedIn: 'root'
})
export class InscriptionOptionsService {

  baseUrl = 'http://dtsl.ehb.be/~anthony.moortgat/SP2/api';
  inscriptionOptionsArray: InscriptionOptions[];

  constructor(private http: HttpClient) { }
  getAll(): Observable<InscriptionOptions[]> {
    return this.http.get(`${this.baseUrl}/inscriptionList.php`).pipe(
      map((res) => {
        this.inscriptionOptionsArray = res['data'];
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
