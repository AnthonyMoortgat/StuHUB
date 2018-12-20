import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import {Debtor} from './debtlist';
import {DebtlistService} from './debtlist.service';

@Component({
  selector: 'app-debtlist',
  templateUrl: './debtlist.component.html',
  styleUrls: ['./debtlist.component.scss']
})
export class DebtlistComponent implements OnInit {
  debtorForm = new FormGroup({
    id: new FormControl(''),
    memberName: new FormControl(''),
    company: new FormControl(''),
    debt: new FormControl(''),
    memberRole: new FormControl('')

  });

  debtChange = new FormGroup({
    amount: new FormControl('', Validators.required)
  });

  debtors: Debtor[];
  error = '';
  success = '';
  sortDebt = true;
  sortName = true;
  staySorted = null;

  edit = false;
  editName: string;
  debtorEditIndex = null;

  editId: number;

  constructor(private debtlistService: DebtlistService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getDebtor();
  }

  getDebtor(): void {
    this.debtlistService.getAll().subscribe(
      (res: Debtor[]) => {
        this.debtors = res;
        this.keepSorted();
      },
      (err) => {
        this.error = err;
      }
    );
  }

  updateDeptor() {
    this.error = '';
    this.success = '';

    this.debtorForm.get('id').setValue(this.editId);

    this.debtlistService.update(this.debtorForm.value)
      .subscribe(
        (res: Debtor[]) => {
          this.debtors = res;
          this.success = 'Updated successfully';
          this.debtorForm.reset();
          this.returnForm();
          this.getDebtor();
        },
        (err) => this.error = err
      );
  }

  returnForm() {
    this.edit = false;
    this.editName = null;
    this.debtorForm.reset();
  }

  editDebtor(memberId): void {
    this.editId = memberId;

    this.edit = true;

    this.debtorEditIndex = this.debtors.findIndex(w => w.id === memberId);
    const debtorEditForm = this.debtors[this.debtorEditIndex];

    // this.debtorForm.get('id').setValue(debtorEditForm.id);
    this.debtorForm.get('id').setValue(debtorEditForm.id);
    this.debtorForm.get('memberName').setValue(debtorEditForm.memberName);
    this.debtorForm.get('company').setValue(debtorEditForm.company);
    this.debtorForm.get('memberRole').setValue(debtorEditForm.memberRole);
    this.debtorForm.get('debt').setValue(debtorEditForm.debt);
  }

  addAmount(memberName): void {

    this.editName = memberName;
    this.edit = true;

    this.debtorEditIndex = this.debtors.findIndex(w => w.memberName === memberName);

    if (this.debtorEditIndex != null) {
      // array[this.debtorEditIndex] += amount
      this.debtors[this.debtorEditIndex].debt = +this.debtors[this.debtorEditIndex].debt + this.debtChange.get('amount').value;
      this.debtorForm.get('debt').setValue(this.debtors[this.debtorEditIndex].debt);
    }
  }

  retractAmount(memberName): void {

    this.editName = memberName;
    this.edit = true;

    this.debtorEditIndex = this.debtors.findIndex(w => w.memberName === memberName);

    if (this.debtorEditIndex != null) {
      // array[this.debtorEditIndex] -= amount
      this.debtors[this.debtorEditIndex].debt = +this.debtors[this.debtorEditIndex].debt - this.debtChange.get('amount').value;
      this.debtorForm.get('debt').setValue(this.debtors[this.debtorEditIndex].debt);
    }
  }

  sortOnDebt(): void {
    if (this.debtors != null) {
      this.debtors.sort((a, b) => a.debt - b.debt);
      this.sortDebt = false;
      this.staySorted = 1;
    }
  }

  reversedDebt(): void {
    if (this.debtors != null) {
      this.debtors.sort((a, b) => b.debt - a.debt);
      this.sortDebt = true;
      this.staySorted = 2;
    }
  }

  debtSort(): void {
    if (this.debtors != null) {
      if (this.sortDebt === true) {
        this.sortOnDebt();
      } else {
        this.reversedDebt();
      }
    }
  }

  sortOnName(): void {
    if (this.debtors != null) {
      this.debtors.sort((a, b) => a.memberName.localeCompare(b.memberName));
      this.sortName = true;
      this.staySorted = 4;
    }
  }

  reversedName(): void {
    if (this.debtors != null) {
      this.debtors.sort((a, b) => b.memberName.localeCompare(a.memberName));
      this.sortName = false;
      this.staySorted = 3;
    }
  }

  nameSort(): void {
    if (this.debtors != null) {
      if (this.sortName === false) {
        this.sortOnName();
      } else {
        this.reversedName();
      }
    }
  }

  keepSorted(): void {
    if (this.debtors != null) {
      switch (this.staySorted) {
        case 1: this.sortOnDebt();
          break;
        case 2: this.reversedDebt();
          break;
        case 3: this.reversedName();
          break;
        case 4: this.sortOnName();
          break;
      }
    }
  }
}
