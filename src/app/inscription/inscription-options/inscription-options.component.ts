import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { InscriptionOptions } from './inscriptionOptions';
import { InscriptionOptionsService } from './inscriptionOptions.service';
import {Inscription} from '../inscription';


@Component({
  selector: 'app-inscription-options',
  templateUrl: './inscription-options.component.html',
  styleUrls: ['./inscription-options.component.scss']
})
export class InscriptionOptionsComponent implements OnInit {

  inscriptionOptions = new FormGroup({
    fistNameActive: new FormControl(),
    fistNameRequired: new FormControl(),
    fistNameVisible: new FormControl(),
    lastNameActive: new FormControl(),
    lastNameRequired: new FormControl(),
    lastNameVisible: new FormControl(),
    phoneNumberActive: new FormControl(),
    phoneNumberRequired: new FormControl(),
    phoneNumberVisible: new FormControl(),
    allergyActive: new FormControl(),
    allergyRequired: new FormControl(),
    allergyVisible: new FormControl(),
    physicalLimitationActive: new FormControl(),
    physicalLimitationRequired: new FormControl(),
    physicalLimitationVisible: new FormControl(),
    birthdateActive: new FormControl(),
    birthdateRequired: new FormControl(),
    birthdateVisible: new FormControl(),
    genderActive: new FormControl(),
    genderRequired: new FormControl(),
    genderVisible: new FormControl(),
    emailActive: new FormControl(),
    emailRequired: new FormControl(),
    emailVisible: new FormControl()
  });

  inscriptionOptionsArray: InscriptionOptions[];
  testString: string[];
  optionsData = new InscriptionOptions('', 4, 0, 0, 0, 0, 0, 0, 0);

  firstNameActiveChecked = false;
  firstNameRequiredChecked = false;
  firstNameVisibleChecked = false;
  lastNameActiveChecked = false;
  lastNameRequiredChecked = false;
  lastNameVisibleChecked = false;
  phoneNumberActiveChecked = false;
  phoneNumberRequiredChecked = false;
  phoneNumberVisibleChecked = false;
  allergyActiveChecked = false;
  allergyRequiredChecked = false;
  allergyVisibleChecked = false;
  physicalLimitationActiveChecked = false;
  physicalLimitationRequiredChecked = false;
  physicalLimitationVisibleChecked = false;
  birthdateActiveChecked = false;
  birthdateRequiredChecked = false;
  birthdateVisibleChecked = false;
  genderActiveChecked = false;
  genderRequiredChecked = false;
  genderVisibleChecked = false;
  emailActiveChecked = false;
  emailRequiredChecked = false;
  emailVisibleChecked = false;

  /*Voorlopige code*/
  // Can be replaced when the array works
  firstNameNumber = 4;
  lastNameNumber = 3;
  phoneNumberNumber = 2;
  allergyNumber = 1;
  physicalLimitationNumber = 0;
  birthdateNumber = 4;
  genderNumber = 3;
  emailNumber = 2;

  error = '';

  constructor(private inscriptionOptionsService: InscriptionOptionsService) { }

  ngOnInit() {
    this.getOptions();
    this.changeOptionCheckboxes();
    this.onChanges();
  }

  getOptions(): void {
    this.inscriptionOptionsService.getAll().subscribe(
      (res: InscriptionOptions[]) => {
        this.inscriptionOptionsArray = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  onSubmit() {

  }

  onChanges(): void {
    this.inscriptionOptions.get('fistNameActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.firstNameActiveChecked = false;
        this.firstNameRequiredChecked = false;
        this.firstNameVisibleChecked = false;
      } else {
        this.firstNameActiveChecked = true;
      }
    });

    this.inscriptionOptions.get('fistNameVisible').valueChanges.subscribe(val => {
      if (val === false) {
        this.firstNameVisibleChecked = false;
      } else {
        this.firstNameVisibleChecked = true;
      }
    });
  }

  changeOptionCheckboxes() {


    // const incriptionEditIndex = this.inscriptionOptionsArray.findIndex(w => w.organisationId === 'Enigma');
    // const inscriptionOptionsValues = this.inscriptionOptionsArray[0];
    // console.log(inscriptionOptionsValues);

    switch (this.firstNameNumber) {
      case 0:
        break;

      case 1:
        this.firstNameActiveChecked = true;
        break;

      case 2:
        this.firstNameActiveChecked = true;
        this.firstNameRequiredChecked = true;
        break;

      case 3:
        this.firstNameActiveChecked = true;
        this.firstNameVisibleChecked = true;
        break;

      case 4:
        this.firstNameActiveChecked = true;
        this.firstNameRequiredChecked = true;
        this.firstNameVisibleChecked = true;
        break;
    }

    switch (this.lastNameNumber) {
      case 0:
        break;

      case 1:
        this.lastNameActiveChecked = true;
        break;

      case 2:
        this.lastNameActiveChecked = true;
        this.lastNameRequiredChecked = true;
        break;

      case 3:
        this.lastNameActiveChecked = true;
        this.lastNameVisibleChecked = true;
        break;

      case 4:
        this.lastNameActiveChecked = true;
        this.lastNameRequiredChecked = true;
        this.lastNameVisibleChecked = true;
        break;
    }

    switch (this.phoneNumberNumber) {
      case 0:
        break;

      case 1:
        this.phoneNumberActiveChecked = true;
        break;

      case 2:
        this.phoneNumberActiveChecked = true;
        this.phoneNumberRequiredChecked = true;
        break;

      case 3:
        this.phoneNumberActiveChecked = true;
        this.phoneNumberVisibleChecked = true;
        break;

      case 4:
        this.phoneNumberActiveChecked = true;
        this.phoneNumberRequiredChecked = true;
        this.phoneNumberVisibleChecked = true;
        break;
    }

    switch (this.allergyNumber) {
      case 0:
        break;

      case 1:
        this.allergyActiveChecked = true;
        break;

      case 2:
        this.allergyActiveChecked = true;
        this.allergyRequiredChecked = true;
        break;

      case 3:
        this.allergyActiveChecked = true;
        this.allergyVisibleChecked = true;
        break;

      case 4:
        this.allergyActiveChecked = true;
        this.allergyRequiredChecked = true;
        this.allergyVisibleChecked = true;
        break;
    }

    switch (this.physicalLimitationNumber) {
      case 0:
        break;

      case 1:
        this.physicalLimitationActiveChecked = true;
        break;

      case 2:
        this.physicalLimitationActiveChecked = true;
        this.physicalLimitationRequiredChecked = true;
        break;

      case 3:
        this.physicalLimitationActiveChecked = true;
        this.physicalLimitationVisibleChecked = true;
        break;

      case 4:
        this.physicalLimitationActiveChecked = true;
        this.physicalLimitationRequiredChecked = true;
        this.physicalLimitationVisibleChecked = true;
        break;
    }

    switch (this.birthdateNumber) {
      case 0:
        break;

      case 1:
        this.birthdateActiveChecked = true;
        break;

      case 2:
        this.birthdateActiveChecked = true;
        this.birthdateRequiredChecked = true;
        break;

      case 3:
        this.birthdateActiveChecked = true;
        this.birthdateVisibleChecked = true;
        break;

      case 4:
        this.birthdateActiveChecked = true;
        this.birthdateRequiredChecked = true;
        this.birthdateVisibleChecked = true;
        break;
    }

    switch (this.genderNumber) {
      case 0:
        break;

      case 1:
        this.genderActiveChecked = true;
        break;

      case 2:
        this.genderActiveChecked = true;
        this.genderRequiredChecked = true;
        break;

      case 3:
        this.genderActiveChecked = true;
        this.genderVisibleChecked = true;
        break;

      case 4:
        this.genderActiveChecked = true;
        this.genderRequiredChecked = true;
        this.genderVisibleChecked = true;
        break;
    }

    switch (this.emailNumber) {
      case 0:
        break;

      case 1:
        this.emailActiveChecked = true;
        break;

      case 2:
        this.emailActiveChecked = true;
        this.emailRequiredChecked = true;
        break;

      case 3:
        this.emailActiveChecked = true;
        this.emailVisibleChecked = true;
        break;

      case 4:
        this.emailActiveChecked = true;
        this.emailRequiredChecked = true;
        this.emailVisibleChecked = true;
        break;
    }
  }
}
