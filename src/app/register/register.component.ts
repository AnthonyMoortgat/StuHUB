import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import {User} from './register';
import {RegisterService} from './register.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    id: new FormControl(0),
    txtFirstname: new FormControl('', Validators.required),
    txtLastname: new FormControl('', Validators.required),
    txtEmail: new FormControl('', Validators.required),
    txtPassword: new FormControl('', Validators.required),
  });

  /* register */
  register: User[];
  error = '';
  success = '';
  // AlreadyExists = '';

  registerData = new User(0, '', '', '', '');
  constructor(private registerService: RegisterService, private formBuilder: FormBuilder, public router: Router) { }

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
    // this.AlreadyExists = '';
    console.log(f);

    this.registerService.store(this.registerData)
      .subscribe(
        (res: User[]) => {
          // Update the list
          this.register = res;
          if (this.register[0].user_id === 0) {
            // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
            // this.router.navigate(['/register'], {queryParams: {register: false}}));
            this.router.navigate(['/register'], {queryParams: {register: false}});
            location.reload();
            // this.AlreadyExists = 'Email already exists!!!';
          } else {
            // Inform the user
            this.router.navigate(['/login'], {queryParams: {register: true}});
            location.reload();
            this.success = 'Created successfully';

            console.log(this.registerForm);

            // Reset the form
            this.registerForm.reset();
          }
        },
        (err) => this.error = err
      );
  }
}
