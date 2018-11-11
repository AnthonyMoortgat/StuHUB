import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Register} from './register';
// import {RegisterService} from '../register.service';
// import {Register} from '../register/register';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  /* register */
  register: Register[];
  error = '';
  success = '';

  registerData = new Register(0, '', '', '', '');
  constructor(/*private registerService: RegisterService, private formBuilder: FormBuilder*/) { }

  ngOnInit() {
  }
}
/*
  getRegister(): void {
    this.registerService.getAll().subscribe(
      (res: Register[]) => {
        this.register = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  addInscription(f) {
    this.error = '';
    this.success = '';

    this.registerService.store(this.registerData)
      .subscribe(
        (res: Register[]) => {
          // Update the list of cars
          this.register = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );
  }
}
*/
