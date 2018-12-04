import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {User} from './register';
// import {RegisterService} from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  /* register */
  register: User[];
  error = '';
  success = '';
  // let errorMsg = false;

  registerData = new User(0, '', '', '', '');
  constructor(private formBuilder: FormBuilder, private router: Router ) { }

  ngOnInit() {
  }
  /*
  getRegister(): void {
    this.registerService.getAll().subscribe(
      (res: User[]) => {
        this.register = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }*/

  addRegister(f) {
    this.error = '';
    this.success = '';
    console.log(f);


  }
}
