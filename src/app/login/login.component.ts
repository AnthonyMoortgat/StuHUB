import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import {User} from './login';
import {LoginService} from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../authguard/auth.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    id: new FormControl(0),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  /* login */
  login: User[];
  error = '';
  success = '';
  dbname = '';
  form;

  // InvalidLogin = '';

  loginData = new User(0, '', '');

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, public router: Router, private auth: AuthService,
              private cookieService: CookieService, private httpClient: HttpClient) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.whileLoggedIn();
  }

  whileLoggedIn() { // kijken of variabele bestaat in sessionstorage, indien variabele bestaat kan er niet naar loginpage worden gegaan
    if (this.auth.isLoggednIn() === true) {
      this.router.navigate(['/']);
    }
  }

  getLogin(f) {
    this.error = '';
    this.success = '';
    this.dbname = '';
    // this.InvalidLogin = '';
    this.loginService.store(this.loginData)
      .subscribe(
        (res: User[]) => {
          // Update the list
          this.login = res;
          if (this.login[0].user_email === 'invalid' && this.login[0].user_password === 'invalid') {
            // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
            // this.router.navigate(['/'], {queryParams: {login: false}}));
            this.router.navigate(['/login'], {queryParams: {login: false}});
            location.reload();
            // this.InvalidLogin = 'Login is invalid!!!';
          } else {
            // Inform the user
            sessionStorage.setItem('Firstname', this.login[0].first_name);
            sessionStorage.setItem('Lastname', this.login[0].last_name);
            sessionStorage.setItem('Orgname', this.login[0].org_name);
            sessionStorage.setItem('DBname', this.login[0].db_name);

            this.auth.sendToken(this.login[0].user_email);
            this.router.navigate(['/']);
            this.success = 'Created successfully';
            console.log(this.loginForm);

            // http request parameters angular
            // Reset the form
            this.loginForm.reset();
          }
        },
        (err) => this.error = err
      );
  }
}
