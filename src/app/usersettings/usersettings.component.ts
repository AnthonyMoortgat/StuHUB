import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { User } from './usersettings';
import { UsersettingsService } from './usersettings.service';
import { AuthService } from '../authguard/auth.service';

@Component({
  selector: 'app-usersettings',
  templateUrl: './usersettings.component.html',
  styleUrls: ['./usersettings.component.scss']
})
export class UsersettingsComponent implements OnInit {

  usersettingsForm = new FormGroup({
    user_id: new FormControl(0),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    user_email: new FormControl(''),
    user_password: new FormControl(''),
    new_password: new FormControl(''),
    org_name: new FormControl(''),
    db_name: new FormControl(''),
  });

  /* usersettings */
  usersettings: User[];
  error = '';
  success = '';

  usersettingsData = new User(0, '', '', '', '', '', '', '');

  // edit = false;
  editID: number;

  constructor(private usersettingsService: UsersettingsService, private formbuilder: FormBuilder, private auth: AuthService) {
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

    this.usersettingsForm.get('user_id').setValue(this.editID);

    this.usersettingsService.update(this.usersettingsForm.value)
      .subscribe(
        (res: User[]) => {
          // Update the user
          this.usersettings = res;

          // Inform the user
          this.success = 'Updated successfully';

          // Reset the form
          this.usersettingsForm.reset();
        },
        (err) => this.error = err
      );
    this.auth.logoutAfterSettings();
  }

  updatePassUser() {
    this.error = '';
    this.success = '';

    this.usersettingsForm.get('user_id').setValue(this.editID);

    this.usersettingsService.updatePass(this.usersettingsForm.value)
      .subscribe(
        (res: User[]) => {
          // Update the user
          this.usersettings = res;

          // Inform the user
          this.success = 'Updated successfully';

          // Reset the form
          this.usersettingsForm.reset();
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

    this.usersettingsForm.get('first_name').setValue(userEditForm.first_name);
    this.usersettingsForm.get('last_name').setValue(userEditForm.last_name);
    this.usersettingsForm.get('user_email').setValue(userEditForm.user_email);
    this.usersettingsForm.get('user_password').setValue(userEditForm.user_password);
    this.usersettingsForm.get('org_name').setValue(userEditForm.org_name);
    this.usersettingsForm.get('db_name').setValue(userEditForm.db_name);
  }

  deleteUser(): void {
    this.success = '';
    this.error   = '';

    this.usersettingsService.delete(this.usersettingsForm.value)
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
