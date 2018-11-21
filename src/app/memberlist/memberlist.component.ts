import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Member} from './member';
import {MemberlistService} from './memberlist.service';


@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.scss']
})
export class MemeberComponent implements OnInit {
  members: Member[];
  error = '';
  success = '';
  constructor(private memberlistService: MemberlistService) {
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

    deleteMember(id) {
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
