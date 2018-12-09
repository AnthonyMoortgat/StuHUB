import {Component, OnInit, ViewChild} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {MermberlistOptionsComponent} from './memberlist-options/memberlist-options.component';

import {Member} from './member';
import {MemberlistService} from './memberlist.service';
import {Inscription} from '../inscription/inscription';


@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.scss']
})
export class MemberlistComponent implements OnInit {
  @ViewChild(MermberlistOptionsComponent) memberlistOptionsChild;

  memberlistForm = new FormGroup( {
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

  edit = false;
  editID: number;


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

  editMemberlist(id): void {

    this.editID = id;
    this.edit = true;

    const memberlistEditIndex = this.members.findIndex(w => w.id === id);
    const memberlistnEditForm = this.members[memberlistEditIndex];

    const membersEdit = this.members.filter(x => x.id === id);

    this.memberlistForm.get('firstName').setValue(memberlistnEditForm.firstName);
    this.memberlistForm.get('lastName').setValue(memberlistnEditForm.lastName);
    this.memberlistForm.get('rol').setValue(memberlistnEditForm.rol);
    this.memberlistForm.get('email').setValue(memberlistnEditForm.email);
    this.memberlistForm.get('birthdate').setValue(memberlistnEditForm.birthdate);

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

  updateMemberlist() {
    this.error = '';
    this.success = '';

    this.memberlistForm.get('id').setValue(this.editID);

    this.memberlistService.update(this.memberlistForm.value)
      .subscribe(
        (res: Member[]) => {
          // Update the list of members
          this.members = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          this.memberlistForm.reset();

          // Return
          this.returnForm();
        },
        (err) => this.error = err
      );
  }

  returnForm() {
    this.edit = false;
    this.editID = null;
    this.memberlistForm.reset();
  }

  onSubmit() {
    this.error = '';
    this.success = '';

    this.memberlistService.store(this.memberlistForm.value)
      .subscribe(
        (res: Inscription[]) => {
          // Update the list of members
          this.members = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          this.memberlistForm.reset();
        },
        (err) => this.error = err
      );
  }

}
