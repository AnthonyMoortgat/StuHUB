import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { UserLogin } from 'src/app/login/UserLogin';
import {LoginService} from 'src/app/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userEmail: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  userLogin: UserLogin[];
  error = '';
  success = '';

  constructor() { }

  ngOnInit() {

  }

  login() {
    this.success = '';
    this.error   = '';

  }
}
