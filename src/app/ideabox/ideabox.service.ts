import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Ideabox } from './ideabox';

@Injectable({
  providedIn: 'root'
})
export class IdeaboxService {

  baseUrl = 'http://dtsl.ehb.be/~drilon.kryeziu/API/ideabox';
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
    return this.http.post(`${this.baseUrl}/ideaboxStore.php`, { data: ideabox })
      .pipe(map((res) => {
          this.ideaboxes.push(res['data']);
          return this.ideaboxes;
        }),
        catchError(this.handleError));
  }


  /*getIdeaWithId(id): Observable<Ideabox[]> {
    const params = new HttpParams().set('id', id);

    return this.http.get(`${this.baseUrl}/ideaboxGetWithId.php`, {params: params}).pipe(
      map((res) => {
        this.ideaboxes = res['data'];
        return this.ideaboxes;
      }),
      catchError(this.handleError));
  }*/


  update(idea: Ideabox): Observable<Ideabox[]> {
    return this.http.put(`${this.baseUrl}/ideaboxUpdate.php`, { data: idea })
      .pipe(map((res) => {
          const theIdea = this.ideaboxes.find((item) => {
            return +item['id'] === +idea['id'];
          });
          if (theIdea) {
            theIdea['subject'] = idea['subject'];
            theIdea['idea'] = idea['idea'];
            theIdea['firstName'] = idea['firstName'];
            theIdea['lastName'] = idea['lastName'];
            theIdea['email'] = idea['email'];
          }
          return this.ideaboxes;
        }),
        catchError(this.handleError));
  }

  delete(id: number): Observable<Ideabox[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/ideaboxDelete.php`, { params: params })
      .pipe(map(res => {
          const theIdeas = this.ideaboxes.filter((ideaA) => {
            return +ideaA['id'] !== +id;
          });
          return this.ideaboxes = theIdeas;
        }),
        catchError(this.handleError));
  }



  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}

