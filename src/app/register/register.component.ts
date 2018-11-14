import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {User} from './register';
import {RegisterService} from './register.service';
// import {RegisterService} from '../register.service';
// import {Register} from '../register/register';


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

  registerData = new User(0, '', '', '', '');
  constructor(private registerService: RegisterService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  getRegister(): void {
    this.registerService.getAll().subscribe(
      (res: User[]) => {
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
    console.log(f);

    this.registerService.store(this.registerData)
      .subscribe(
        (res: User[]) => {
          // Update the list
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
