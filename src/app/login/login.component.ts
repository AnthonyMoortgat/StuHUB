import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {User} from './login';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /* login */
  login: User[];
  error = '';
  success = '';

  loginData = new User(0, '', '', '', '');
  constructor(private loginService: LoginService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
/*
  getLogin(): void {
    this.loginService.getAll().subscribe(
      (res: Login[]) => {
        this.login = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
*/
  getLogin(f) {
    this.error = '';
    this.success = '';

    this.loginService.store(this.loginData)
      .subscribe(
        (res: User[]) => {
          // Update the list of cars
          this.login = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );
  }
}
