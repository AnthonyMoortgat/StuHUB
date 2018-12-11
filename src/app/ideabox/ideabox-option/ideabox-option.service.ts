import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {IdeaboxOption} from './ideabox-option';
import {Ideabox} from '../ideabox';

@Injectable({
  providedIn: 'root'
})
export class IdeaboxOptionService {
  baseUrl = 'http://dtsl.ehb.be/~anas.ahraoui/api/options';
  ideaboxOptionsArray: IdeaboxOption[];



  constructor(private http: HttpClient) { }

  getAll(): Observable<IdeaboxOption[]> {
    return this.http.get(`${this.baseUrl}/ideaboxOptionsGetAll.php`).pipe(
      map((res) => {
        this.ideaboxOptionsArray = res['data'];
        return this.ideaboxOptionsArray;
      }),
      catchError(this.handleError));

  }


  update(ideaboxOption: IdeaboxOption): Observable<IdeaboxOption[]> {
    return this.http.put(`${this.baseUrl}/ideaboxOptionsUpdate.php`, { data: ideaboxOption })
      .pipe(map((res) => {
          const theIdeaboxOption = this.ideaboxOptionsArray.find((item) => {
            return +item['organisationID'] === +ideaboxOption['organisationID'];
          });
          if (theIdeaboxOption) {
            theIdeaboxOption['subject'] = ideaboxOption['subject'];
            theIdeaboxOption['idea'] = ideaboxOption['idea'];
            theIdeaboxOption['firstName'] = ideaboxOption['firstName'];
            theIdeaboxOption['lastName'] = ideaboxOption['lastName'];
            theIdeaboxOption['email'] = ideaboxOption['email'];
          }
          return this.ideaboxOptionsArray;
        }),
        catchError(this.handleError));
  }




  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

}
