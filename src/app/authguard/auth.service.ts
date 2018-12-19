import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private cookieService: CookieService) { }
    sendToken(token: string) {
      sessionStorage.setItem('LoggedInUser', token);
    }
    getToken() {
      return sessionStorage.getItem('LoggedInUser');
    }
    isLoggednIn() {
      return this.getToken() !== null;
    }
    logout() {
      sessionStorage.removeItem('LoggedInUser');
      sessionStorage.removeItem('Firstname');
      sessionStorage.removeItem('Lastname');
      sessionStorage.removeItem('Orgname');
      sessionStorage.removeItem('DBname');

      this.router.navigate(['/login'], {queryParams: {logout: true}});
      location.reload();
  }
  logoutAfterSettings() {
    sessionStorage.removeItem('LoggedInUser');
    sessionStorage.removeItem('Firstname');
    sessionStorage.removeItem('Lastname');
    sessionStorage.removeItem('Orgname');
    sessionStorage.removeItem('DBname');

    this.router.navigate(['/login'], {queryParams: {usersettingsSaved: true}});
    location.reload();
  }
  logoutAfterDelete() {
    sessionStorage.removeItem('LoggedInUser');
    sessionStorage.removeItem('Firstname');
    sessionStorage.removeItem('Lastname');
    sessionStorage.removeItem('Orgname');
    sessionStorage.removeItem('DBname');

    this.router.navigate(['/login'], {queryParams: {accountDeleted: true}});
    location.reload();
  }
}
