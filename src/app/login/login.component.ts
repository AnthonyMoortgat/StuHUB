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


  }
}
