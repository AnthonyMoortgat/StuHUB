import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './usersettings';
import { UsersettingsService } from './usersettings.service';
import { AuthService } from '../authguard/auth.service';
import {ValidateFn} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-usersettings',
  templateUrl: './usersettings.component.html',
  styleUrls: ['./usersettings.component.scss']
})
export class UsersettingsComponent implements OnInit {

  usersettingsForm1 = new FormGroup({
    user_id: new FormControl(0),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    user_email: new FormControl('', [Validators.email, Validators.required]),
    org_name: new FormControl('', Validators.required)
  });

  usersettingsForm2 = new FormGroup({
    user_id: new FormControl(0),
    user_password: new FormControl('', Validators.required),
    new_password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[0-9]).{8,20}')])
  });

  usersettingsForm3 = new FormGroup({
    user_password: new FormControl('', Validators.required),
  });

  /* usersettings */
  usersettings: User[];
  error = '';
  success = '';

  usersettingsData = new User(0, '', '', '', '', '', '', '', '');

  // edit = false;
  editID: number;

  constructor(private usersettingsService: UsersettingsService, private formbuilder: FormBuilder, private auth: AuthService,
              public router: Router) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.usersettingsService.getAll().subscribe(
      (res: User[]) => {
        this.usersettings = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  updateUser() {
    this.error = '';
    this.success = '';

    this.usersettingsForm1.get('user_id').setValue(this.editID);

    this.usersettingsService.update(this.usersettingsForm1.value)
      .subscribe(
        (res: User[]) => {
          // Update the user
          this.usersettings = res;

          // Inform the user
          this.success = 'Updated successfully';

          // Reset the form
          this.usersettingsForm1.reset();
        },
        (err) => this.error = err
      );
    this.auth.logoutAfterSettings();
  }

  updatePassUser() {
    this.error = '';
    this.success = '';

    this.usersettingsForm2.get('user_id').setValue(this.editID);

    this.usersettingsService.updatePass(this.usersettingsForm2.value)
      .subscribe(
        (res: User[]) => {
          // Update the user
          this.usersettings = res;

          // Inform the user
          this.success = 'Updated successfully';

          // Reset the form
          this.usersettingsForm2.reset();
        },
        (err) => this.error = err
      );
    this.auth.logoutAfterSettings();
  }

  editUser(id): void {

    this.editID = id;
    // this.edit = true;

    const userEditIndex = this.usersettings.findIndex(w => w.user_id === id);
    const userEditForm = this.usersettings[userEditIndex];

    const userEdit = this.usersettings.filter(x => x.user_id === id);

    this.usersettingsForm1.get('first_name').setValue(userEditForm.first_name);
    this.usersettingsForm1.get('last_name').setValue(userEditForm.last_name);
    this.usersettingsForm1.get('user_email').setValue(userEditForm.user_email);
    this.usersettingsForm1.get('org_name').setValue(userEditForm.org_name);
  }

  deleteUser(): void {
    this.success = '';
    this.error   = '';

    this.usersettingsService.delete(this.usersettingsForm3.value)
      .subscribe(
        (res: User[]) => {
          this.usersettings = res;
          this.success = 'Deleted successfully';
        },
        (err) => this.error = err
      );
    this.auth.logoutAfterDelete();
  }
}
