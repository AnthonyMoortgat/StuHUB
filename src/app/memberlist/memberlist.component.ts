import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {Member} from './member';
import {MemberlistService} from './memberlist.service';


@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.scss']
})
export class MemberlistComponent implements OnInit {
  member = new FormGroup( {
    id : new FormControl(0),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    }
  );

  members: Member[];
  error = '';
  success = '';

  memberlistData = new Member(0, '', '', '', '', new Date());
  constructor(private memberlistService: MemberlistService, private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.getMembers();
  }
    getMembers(): void {
      this.memberlistService.getAll().subscribe(
        (res: Member[]) => {
          this.members = res;
        },
        (err) => {
          this.error = err;
        }
      );
    }

  addMember(form) {
    this.error = '';
    this.success = '';

    this.memberlistService.store(this.memberlistData)
      .subscribe(
        (res: Member[]) => {
          // Update the list of members
          this.members = res;
          // Inform the user
          this.success = 'Created successfully';
          // Reset the form
          form.reset();
        },
        (err) => this.error = err
      );
  }

  editMemberlist(): void {

  }

  deleteMemberlist(id): void {
    this.success = '';
    this.error = '';

    this.memberlistService.delete(+id).subscribe(
      (res: Member[]) => {
        this.members = res;
        this.success = 'Deteled successfully';
      },
      (err) => this.error = err
    );
    }
}
