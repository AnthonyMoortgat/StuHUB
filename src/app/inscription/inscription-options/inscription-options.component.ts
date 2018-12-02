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

  @Input() inscriptionForm: FormGroup;

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

  changeRequirements(name, boolean) {
    if (boolean) {
      this.inscriptionForm.controls[name].setValidators(Validators.required);
      this.inscriptionForm.controls[name].updateValueAndValidity();
    } else {
      this.inscriptionForm.controls[name].setValidators(null);
      this.inscriptionForm.controls[name].updateValueAndValidity();
    }
  }

  onChanges(): void {
    this.inscriptionOptions.get('fistNameActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.firstNameActiveChecked = false;
        this.firstNameRequiredChecked = false;
        this.firstNameVisibleChecked = false;
        this.changeRequirements('firstName', this.firstNameRequiredChecked);
      } else {
        this.firstNameActiveChecked = true;
      }
    });

    this.inscriptionOptions.get('fistNameRequired').valueChanges.subscribe(val => {
      if (val === false && this.firstNameActiveChecked === true) {
        this.firstNameRequiredChecked = false;
      } else {
        this.firstNameRequiredChecked = true;
      }
      this.changeRequirements('firstName', this.firstNameRequiredChecked);
    });

    this.inscriptionOptions.get('fistNameVisible').valueChanges.subscribe(val => {
      if (val === false  && this.firstNameActiveChecked === true) {
        this.firstNameVisibleChecked = false;
      } else {
        this.firstNameVisibleChecked = true;
      }
    });

    this.inscriptionOptions.get('lastNameActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.lastNameActiveChecked = false;
        this.lastNameRequiredChecked = false;
        this.lastNameVisibleChecked = false;
        this.changeRequirements('lastName', this.lastNameRequiredChecked);
      } else {
        this.lastNameActiveChecked = true;
      }
    });

    this.inscriptionOptions.get('lastNameRequired').valueChanges.subscribe(val => {
      if (val === false && this.lastNameActiveChecked === true) {
        this.lastNameRequiredChecked = false;
      } else {
        this.lastNameRequiredChecked = true;
      }
      this.changeRequirements('lastName', this.lastNameRequiredChecked);
    });

    this.inscriptionOptions.get('lastNameVisible').valueChanges.subscribe(val => {
      if (val === false  && this.lastNameActiveChecked === true) {
        this.lastNameVisibleChecked = false;
      } else {
        this.lastNameVisibleChecked = true;
      }
    });

    this.inscriptionOptions.get('phoneNumberActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.phoneNumberActiveChecked = false;
        this.phoneNumberRequiredChecked = false;
        this.phoneNumberVisibleChecked = false;
        this.changeRequirements('phoneNumber', this.phoneNumberRequiredChecked);
      } else {
        this.phoneNumberActiveChecked = true;
      }
    });

    this.inscriptionOptions.get('phoneNumberRequired').valueChanges.subscribe(val => {
      if (val === false && this.phoneNumberActiveChecked === true) {
        this.phoneNumberRequiredChecked = false;
      } else {
        this.phoneNumberRequiredChecked = true;
      }
      this.changeRequirements('phoneNumber', this.phoneNumberRequiredChecked);
    });

    this.inscriptionOptions.get('phoneNumberVisible').valueChanges.subscribe(val => {
      if (val === false  && this.phoneNumberActiveChecked === true) {
        this.phoneNumberVisibleChecked = false;
      } else {
        this.phoneNumberVisibleChecked = true;
      }
    });

    this.inscriptionOptions.get('allergyActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.allergyActiveChecked = false;
        this.allergyRequiredChecked = false;
        this.allergyVisibleChecked = false;
        this.changeRequirements('allergy', this.allergyRequiredChecked);
      } else {
        this.allergyActiveChecked = true;
      }
    });

    this.inscriptionOptions.get('allergyRequired').valueChanges.subscribe(val => {
      if (val === false && this.allergyActiveChecked === true) {
        this.allergyRequiredChecked = false;
      } else {
        this.allergyRequiredChecked = true;
      }
      this.changeRequirements('allergy', this.allergyRequiredChecked);
    });

    this.inscriptionOptions.get('allergyVisible').valueChanges.subscribe(val => {
      if (val === false  && this.allergyActiveChecked === true) {
        this.allergyVisibleChecked = false;
      } else {
        this.allergyVisibleChecked = true;
      }
    });

    this.inscriptionOptions.get('physicalLimitationActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.physicalLimitationActiveChecked = false;
        this.physicalLimitationRequiredChecked = false;
        this.physicalLimitationVisibleChecked = false;
        this.changeRequirements('physicalLimitation', this.physicalLimitationRequiredChecked);
      } else {
        this.physicalLimitationActiveChecked = true;
      }
    });

    this.inscriptionOptions.get('physicalLimitationRequired').valueChanges.subscribe(val => {
      if (val === false && this.physicalLimitationActiveChecked === true) {
        this.physicalLimitationRequiredChecked = false;
      } else {
        this.physicalLimitationRequiredChecked = true;
      }
      this.changeRequirements('physicalLimitation', this.physicalLimitationRequiredChecked);
    });

    this.inscriptionOptions.get('physicalLimitationVisible').valueChanges.subscribe(val => {
      if (val === false  && this.physicalLimitationActiveChecked === true) {
        this.physicalLimitationVisibleChecked = false;
      } else {
        this.physicalLimitationVisibleChecked = true;
      }
    });

    this.inscriptionOptions.get('birthdateActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.birthdateActiveChecked = false;
        this.birthdateRequiredChecked = false;
        this.birthdateVisibleChecked = false;
        this.changeRequirements('birthdate', this.birthdateRequiredChecked);
      } else {
        this.birthdateActiveChecked = true;
      }
    });

    this.inscriptionOptions.get('birthdateRequired').valueChanges.subscribe(val => {
      if (val === false && this.birthdateActiveChecked === true) {
        this.birthdateRequiredChecked = false;
      } else {
        this.birthdateRequiredChecked = true;
      }
      this.changeRequirements('birthdate', this.birthdateRequiredChecked);
    });

    this.inscriptionOptions.get('birthdateVisible').valueChanges.subscribe(val => {
      if (val === false  && this.birthdateActiveChecked === true) {
        this.birthdateVisibleChecked = false;
      } else {
        this.birthdateVisibleChecked = true;
      }
    });

    this.inscriptionOptions.get('genderActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.genderActiveChecked = false;
        this.genderRequiredChecked = false;
        this.genderVisibleChecked = false;
        this.changeRequirements('gender', this.genderRequiredChecked);
      } else {
        this.genderActiveChecked = true;
      }
    });

    this.inscriptionOptions.get('genderRequired').valueChanges.subscribe(val => {
      if (val === false && this.genderActiveChecked === true) {
        this.genderRequiredChecked = false;
      } else {
        this.genderRequiredChecked = true;
      }
      this.changeRequirements('gender', this.genderRequiredChecked);
    });

    this.inscriptionOptions.get('genderVisible').valueChanges.subscribe(val => {
      if (val === false  && this.genderActiveChecked === true) {
        this.genderVisibleChecked = false;
      } else {
        this.genderVisibleChecked = true;
      }
    });

    this.inscriptionOptions.get('emailActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.emailActiveChecked = false;
        this.emailRequiredChecked = false;
        this.emailVisibleChecked = false;
        this.changeRequirements('email', this.emailRequiredChecked);
      } else {
        this.emailActiveChecked = true;
      }
    });

    this.inscriptionOptions.get('emailRequired').valueChanges.subscribe(val => {
      if (val === false && this.emailActiveChecked === true) {
        this.emailRequiredChecked = false;
      } else {
        this.emailRequiredChecked = true;
      }
      this.changeRequirements('email', this.emailRequiredChecked);
    });

    this.inscriptionOptions.get('emailVisible').valueChanges.subscribe(val => {
      if (val === false  && this.emailActiveChecked === true) {
        this.emailVisibleChecked = false;
      } else {
        this.emailVisibleChecked = true;
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
        this.changeRequirements('firstName', this.firstNameRequiredChecked);
        break;

      case 3:
        this.firstNameActiveChecked = true;
        this.firstNameVisibleChecked = true;
        break;

      case 4:
        this.firstNameActiveChecked = true;
        this.firstNameRequiredChecked = true;
        this.firstNameVisibleChecked = true;
        this.changeRequirements('firstName', this.firstNameRequiredChecked);
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
        this.changeRequirements('lastName', this.lastNameRequiredChecked);
        break;

      case 3:
        this.lastNameActiveChecked = true;
        this.lastNameVisibleChecked = true;
        break;

      case 4:
        this.lastNameActiveChecked = true;
        this.lastNameRequiredChecked = true;
        this.lastNameVisibleChecked = true;
        this.changeRequirements('lastName', this.lastNameRequiredChecked);
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
        this.changeRequirements('phoneNumber', this.phoneNumberRequiredChecked);
        break;

      case 3:
        this.phoneNumberActiveChecked = true;
        this.phoneNumberVisibleChecked = true;
        break;

      case 4:
        this.phoneNumberActiveChecked = true;
        this.phoneNumberRequiredChecked = true;
        this.phoneNumberVisibleChecked = true;
        this.changeRequirements('phoneNumber', this.phoneNumberRequiredChecked);
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
        this.changeRequirements('allergy', this.allergyRequiredChecked);
        break;

      case 3:
        this.allergyActiveChecked = true;
        this.allergyVisibleChecked = true;
        break;

      case 4:
        this.allergyActiveChecked = true;
        this.allergyRequiredChecked = true;
        this.allergyVisibleChecked = true;
        this.changeRequirements('allergy', this.allergyRequiredChecked);
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
        this.changeRequirements('physicalLimitation', this.physicalLimitationRequiredChecked);
        break;

      case 3:
        this.physicalLimitationActiveChecked = true;
        this.physicalLimitationVisibleChecked = true;
        break;

      case 4:
        this.physicalLimitationActiveChecked = true;
        this.physicalLimitationRequiredChecked = true;
        this.physicalLimitationVisibleChecked = true;
        this.changeRequirements('physicalLimitation', this.physicalLimitationRequiredChecked);
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
        this.changeRequirements('birthdate', this.birthdateRequiredChecked);
        break;

      case 3:
        this.birthdateActiveChecked = true;
        this.birthdateVisibleChecked = true;
        break;

      case 4:
        this.birthdateActiveChecked = true;
        this.birthdateRequiredChecked = true;
        this.birthdateVisibleChecked = true;
        this.changeRequirements('birthdate', this.birthdateRequiredChecked);
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
        this.changeRequirements('gender', this.genderRequiredChecked);
        break;

      case 3:
        this.genderActiveChecked = true;
        this.genderVisibleChecked = true;
        break;

      case 4:
        this.genderActiveChecked = true;
        this.genderRequiredChecked = true;
        this.genderVisibleChecked = true;
        this.changeRequirements('gender', this.genderRequiredChecked);
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
        this.changeRequirements('email', this.emailRequiredChecked);
        break;

      case 3:
        this.emailActiveChecked = true;
        this.emailVisibleChecked = true;
        break;

      case 4:
        this.emailActiveChecked = true;
        this.emailRequiredChecked = true;
        this.emailVisibleChecked = true;
        this.changeRequirements('email', this.emailRequiredChecked);
        break;
    }
  }
}
