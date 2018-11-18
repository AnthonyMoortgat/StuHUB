import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import {Observable, throwError } from 'rxjs';
import {map, catchError } from 'rxjs/operators';

import {Member} from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberlistService {

  baseUrl = 'http://dtsl.ehb.be/~drilon.kryeziu/API/';
  members: Member[];

    constructor(private http: HttpClient) { }
}

/* test*/
