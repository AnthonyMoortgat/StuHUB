import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import {User} from './login';
import {LoginService} from './login.service';
import {CookieService} from 'ngx-cookie-service';

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
  // InvalidLogin = '';

  loginData = new User(0, '', '');
  constructor(private loginService: LoginService, private formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
  }

  getLogin(f) {
    this.error = '';
    this.success = '';
    // this.InvalidLogin = '';
    console.log(f);

    this.loginService.store(this.loginData)
      .subscribe(
        (res: User[]) => {
          // Update the list
          this.login = res;
          if (this.login[0].user_email === 'invalid' && this.login[0].user_password === 'invalid') {
            // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
            // this.router.navigate(['/'], {queryParams: {login: false}}));
            this.router.navigate(['/'], {queryParams: {login: false}});
            location.reload();
            // this.InvalidLogin = 'Login is invalid!!!';
          } else {
            // Inform the user
            this.router.navigate(['/home']);
            this.success = 'Created successfully';

            console.log(this.loginForm);

            // Reset the form
            this.loginForm.reset();
          }
        },
        (err) => this.error = err
      );
  }
}
