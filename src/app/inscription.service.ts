import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Inscription } from './inscription/inscription';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  baseUrl = 'http://localhost:4200/api';
  inscriptions: Inscription[];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Inscription[]> {
    return this.http.get(`${this.baseUrl}/inscriptionList`).pipe(
      map((res) => {
        this.inscriptions = res['data'];
        return this.inscriptions;
    }),
    catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}


