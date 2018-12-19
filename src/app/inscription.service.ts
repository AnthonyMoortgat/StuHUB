import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Inscription } from './inscription/inscription';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  baseUrl = 'http://dtsl.ehb.be/~michael.de.gauquier/SP2/api';
  inscriptions: Inscription[];

  constructor(private http: HttpClient) { }

  userID = sessionStorage.getItem('Orgname');

  getAll(): Observable<Inscription[]> {
    const params = new HttpParams().set('id', this.userID);

    return this.http.get(`${this.baseUrl}/inscriptionList.php`, {params: params}).pipe(
      map((res) => {
        if (res != null) {
          this.inscriptions = res['data'];
          return this.inscriptions;
        }
    }),
    catchError(this.handleError));
  }

  store(inscription: Inscription): Observable<Inscription[]> {
    const params = new HttpParams().set('id', this.userID);

    return this.http.post(`${this.baseUrl}/inscriptionStore.php`, { data: inscription }, {params}).pipe(
      map((res) => {
          this.inscriptions.push(res['data']);
          return this.inscriptions;
        }),
        catchError(this.handleError));
  }

  update(inscription: Inscription): Observable<Inscription[]> {
    const params = new HttpParams().set('id', this.userID);

    return this.http.put(`${this.baseUrl}/inscriptionUpdate.php`, { data: inscription }, {params})
      .pipe(map((res) => {
          const theInscription = this.inscriptions.find((item) => {
            return +item['id'] === +inscription['id'];
          });
          if (theInscription) {
            theInscription['firstName'] = inscription['firstName'];
            theInscription['lastName'] = inscription['lastName'];
            theInscription['phoneNumber'] = inscription['phoneNumber'];
            theInscription['allergy'] = inscription['allergy'];
            theInscription['physicalLimitation'] = inscription['physicalLimitation'];
            theInscription['birthdate'] = inscription['birthdate'];
            theInscription['gender'] = inscription['gender'];
            theInscription['email'] = inscription['email'];
          }
          return this.inscriptions;
        }),
        catchError(this.handleError));
  }

  delete(id: number): Observable<Inscription[]> {
    const params = new HttpParams()
      .set('idInscription', id.toString()).set('id', this.userID);

    return this.http.delete(`${this.baseUrl}/inscriptionDelete.php`, { params: params })
      .pipe(map(res => {
          const filteredInscription = this.inscriptions.filter((inscription) => {
            return +inscription['id'] !== +id;
          });
          return this.inscriptions = filteredInscription;
        }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}


