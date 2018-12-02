import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
    sendToken(token: string) {
      localStorage.setItem('LoggedInUser', token);
    }
    getToken() {
      return localStorage.getItem('LoggedInUser');
    }
    isLoggednIn() {
      return this.getToken() !== null;
    }
    logout() {
      localStorage.removeItem('LoggedInUser');
      localStorage.removeItem('Firstname');
      localStorage.removeItem('Lastname');
      this.router.navigate(['/login'], {queryParams: {logout: true}});
      location.reload();
  }
}
