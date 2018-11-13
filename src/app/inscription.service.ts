import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Inscription } from './inscription/inscription';
import {NULL_INJECTOR} from '@angular/core/src/render3/component';
import {QueryEncoder} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  baseUrl = 'http://dtsl.ehb.be/~anthony.moortgat/SP2/api';
  inscriptions: Inscription[];

  constructor(private http: HttpClient) { }
  getAll(): Observable<Inscription[]> {
    return this.http.get(`${this.baseUrl}/inscriptionList.php`).pipe(
      map((res) => {
        this.inscriptions = res['data'];
        return this.inscriptions;
    }),
    catchError(this.handleError));
  }

  getInscriptionWithId(id): Observable<Inscription[]> {
    const params = new HttpParams().set('id', id);

    return this.http.get(`${this.baseUrl}/inscriptionGetWithID.php`, {params: params}).pipe(
      map((res) => {
        this.inscriptions = res['data'];
        return this.inscriptions;
      }),
      catchError(this.handleError));
  }

  store(inscription: Inscription): Observable<Inscription[]> {
    return this.http.post(`${this.baseUrl}/inscriptionStore.php`, { data: inscription })
      .pipe(map((res) => {
          this.inscriptions.push(res['data']);
          return this.inscriptions;
        }),
        catchError(this.handleError));
  }

  update(inscription: Inscription): Observable<Inscription[]> {
    return this.http.post(`${this.baseUrl}/inscriptionStore.php`, { data: inscription })
      .pipe(map((res) => {
          this.inscriptions.push(res['data']);
          return this.inscriptions;
        }),
        catchError(this.handleError));
  }

  test(inscription: Inscription): Observable<Inscription[]> {
    return this.http.post(`${this.baseUrl}/testStore.php`, { data: inscription })
      .pipe(map((res) => {
          this.inscriptions.push(res['data']);
          return this.inscriptions;
        }),
        catchError(this.handleError));
  }

  delete(id: number): Observable<Inscription[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/inscriptionDelete.php`, { params: params })
      .pipe(map(res => {
          const filteredCars = this.inscriptions.filter((car) => {
            return +car['id'] !== +id;
          });
          return this.inscriptions = filteredCars;
        }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}


