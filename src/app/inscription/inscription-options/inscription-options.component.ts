import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor() { }

  ngOnInit() {

  }

  onSubmit() {

  }
}
