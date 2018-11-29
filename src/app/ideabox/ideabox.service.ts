import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Ideabox } from '/ideabox';

@Injectable({
  providedIn: 'root'
})
export class IdeaboxService {

  baseUrl = 'http://dtsl.ehb.be/~anas.ahraoui/api';
  ideaboxes: Ideabox[];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ideabox[]> {
    return this.http.get(`${this.baseUrl}/ideaboxList.php`).pipe(
      map((res) => {
        this.ideaboxes = res['data'];
        return this.ideaboxes;
      }),
      catchError(this.handleError));


  }


  store(ideabox: Ideabox): Observable<Ideabox[]> {
    return this.http.post(`${this.baseUrl}/ideaboxStore`, { data: ideabox })
      .pipe(map((res) => {
          this.ideaboxes.push(res['data']);
          return this.ideaboxes;
        }),
        catchError(this.handleError));
  }



  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}

