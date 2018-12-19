import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Debtor} from './debtlist';

@Injectable({
  providedIn: 'root'
})
export class DebtlistService {

  baseUrl = 'http://dtsl.ehb.be/~anthony.moortgat/SP2/api/Debtlist';
  debtors: Debtor[];

  constructor(private http: HttpClient) { }

  userID = sessionStorage.getItem('Orgname');

  getAll(): Observable<Debtor[]> {
    const params = new HttpParams().set('id', this.userID);

    return this.http.get(`${this.baseUrl}/debtlistGetAll.php`, {params: params}).pipe(
      map((res) => {
        this.debtors = res['data'];
        return this.debtors;
      }),
      catchError(this.handleError));
  }

  update(debtor: Debtor): Observable<Debtor[]> {
    const params = new HttpParams().set('id', this.userID);

    return this.http.put(`${this.baseUrl}/debtlistUpdate.php`, { data: debtor }, {params: params})
      .pipe(map((res) => {
          const theDebtor = this.debtors.find((item) => {
            return +item['id'] === +debtor['id'];
          });
          if (theDebtor) {
            theDebtor['memberName'] = debtor['memberName'];
            theDebtor['company'] = debtor['company'];
            theDebtor['debt'] = debtor['debt'];
            theDebtor['memberRole'] = debtor['memberRole'];
          }
          return this.debtors;
        }),
        catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
