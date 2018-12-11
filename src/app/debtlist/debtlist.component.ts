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
    memberName: new FormControl(''),
    company: new FormControl('', Validators.required),
    debt: new FormControl('', Validators.required),
    memberRole: new FormControl('', Validators.required)

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

  debtlistData = new Debtor('', '', 0, '');
  debtlistUpdateData = new Debtor('', '', 0, '');

  edit = false;
  editName: string;
  debtorEditIndex = null;

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

    this.debtorForm.get('memberName').setValue(this.editName);

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

  /*updateDeptor2() {
    this.error = '';
    this.success = '';

    this.debtorForm.get('memberName2').setValue(this.editName);

    this.debtlistService.update2(this.debtorForm2.value)
      .subscribe(
        (res: Debtor[]) => {
          this.debtors2 = res;
          this.success = 'Updated successfully';
          this.debtorForm2.reset();
          this.returnForm2();
          this.getDebtor2();
        },
        (err) => this.error = err
      );
  }*/

  returnForm() {
    this.edit = false;
    this.editName = null;
    this.debtorForm.reset();
  }

  /*returnForm2() {
    this.edit = false;
    this.editName = null;
    this.debtorForm2.reset();
  }*/

  editDebtor(memberName): void {

    this.editName = memberName;
    this.edit = true;

    this.debtorEditIndex = this.debtors.findIndex(w => w.memberName === memberName);
    const debtorEditForm = this.debtors[this.debtorEditIndex];

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
    this.debtors.sort((a, b) => a.debt - b.debt);
    this.sortDebt = false;
    this.staySorted = 1;
  }

  reversedDebt(): void {
    this.debtors.sort((a, b) => b.debt - a.debt);
    this.sortDebt = true;
    this.staySorted = 2;
  }

  debtSort(): void {
    if (this.sortDebt === true) {
      this.sortOnDebt();
    } else {
      this.reversedDebt();
    }
  }

  sortOnName(): void {
    this.debtors.sort((a, b) => a.memberName.localeCompare(b.memberName));
    this.sortName = true;
    this.staySorted = 4;
  }

  reversedName(): void {
    this.debtors.sort((a, b) => b.memberName.localeCompare(a.memberName));
    this.sortName = false;
    this.staySorted = 3;
  }

  nameSort(): void {
    if (this.sortName === false) {
      this.sortOnName();
    } else {
      this.reversedName();
    }
  }

  keepSorted(): void {
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
