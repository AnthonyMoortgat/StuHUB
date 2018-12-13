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

  inscriptionOptionsForm = new FormGroup({
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

  inscriptionOptionsUpdateForm = new FormGroup({
    organisationId: new FormControl(''),
    firstName: new FormControl(0),
    lastName: new FormControl(0),
    phoneNumber: new FormControl(0),
    allergy: new FormControl(0),
    physicalLimitation: new FormControl(0),
    birthdate: new FormControl(0),
    gender: new FormControl(0),
    email: new FormControl(0)
  });

  inscriptionOptionsArray: InscriptionOptions[];

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
    this.onChanges();
  }

  getOptions(): void {
    this.inscriptionOptionsService.getAll().subscribe(
      (res: InscriptionOptions[]) => {
        this.inscriptionOptionsArray = res;
        this.changeVarDb();
      },
      (err) => {
        this.error = err;
      }
    );
  }

  onSubmit() {
    this.changeFormValue('Enigma');

    this.inscriptionOptionsService.update(this.inscriptionOptionsUpdateForm.value)
      .subscribe(
        (res: InscriptionOptions[]) => {
          this.inscriptionOptionsArray = res;
        },
        (err) => this.error = err
      );
  }

  changeFormValue(organisationId) {
    this.inscriptionOptionsUpdateForm.get('organisationId').setValue(organisationId);

    if (this.firstNameActiveChecked) {
      if (this.firstNameRequiredChecked || this.firstNameVisibleChecked) {
        if (this.firstNameRequiredChecked && this.firstNameVisibleChecked) {
          this.inscriptionOptionsUpdateForm.get('firstName').setValue(4);
        } else if (this.firstNameVisibleChecked) { this.inscriptionOptionsUpdateForm.get('firstName').setValue(3); } else {
          this.inscriptionOptionsUpdateForm.get('firstName').setValue(2);
        }
      } else { this.inscriptionOptionsUpdateForm.get('firstName').setValue(1); }
    } else { this.inscriptionOptionsUpdateForm.get('firstName').setValue(0); }

    if (this.lastNameActiveChecked) {
      if (this.lastNameRequiredChecked || this.lastNameVisibleChecked) {
        if (this.lastNameRequiredChecked && this.lastNameVisibleChecked) {
          this.inscriptionOptionsUpdateForm.get('lastName').setValue(4);
        } else if (this.lastNameVisibleChecked) { this.inscriptionOptionsUpdateForm.get('lastName').setValue(3); } else {
          this.inscriptionOptionsUpdateForm.get('lastName').setValue(2);
        }
      } else { this.inscriptionOptionsUpdateForm.get('lastName').setValue(1); }
    } else { this.inscriptionOptionsUpdateForm.get('lastName').setValue(0); }

    if (this.phoneNumberActiveChecked) {
      if (this.phoneNumberRequiredChecked || this.phoneNumberVisibleChecked) {
        if (this.phoneNumberRequiredChecked && this.phoneNumberVisibleChecked) {
          this.inscriptionOptionsUpdateForm.get('phoneNumber').setValue(4);
        } else if (this.phoneNumberVisibleChecked) { this.inscriptionOptionsUpdateForm.get('phoneNumber').setValue(3); } else {
          this.inscriptionOptionsUpdateForm.get('phoneNumber').setValue(2);
        }
      } else { this.inscriptionOptionsUpdateForm.get('phoneNumber').setValue(1); }
    } else { this.inscriptionOptionsUpdateForm.get('phoneNumber').setValue(0); }

    if (this.allergyActiveChecked) {
      if (this.allergyRequiredChecked || this.allergyVisibleChecked) {
        if (this.allergyRequiredChecked && this.allergyVisibleChecked) {
          this.inscriptionOptionsUpdateForm.get('allergy').setValue(4);
        } else if (this.allergyVisibleChecked) { this.inscriptionOptionsUpdateForm.get('allergy').setValue(3); } else {
          this.inscriptionOptionsUpdateForm.get('allergy').setValue(2);
        }
      } else { this.inscriptionOptionsUpdateForm.get('allergy').setValue(1); }
    } else { this.inscriptionOptionsUpdateForm.get('allergy').setValue(0); }

    if (this.physicalLimitationActiveChecked) {
      if (this.physicalLimitationRequiredChecked || this.physicalLimitationVisibleChecked) {
        if (this.physicalLimitationRequiredChecked && this.physicalLimitationVisibleChecked) {
          this.inscriptionOptionsUpdateForm.get('physicalLimitation').setValue(4);
        } else if (this.physicalLimitationVisibleChecked) { this.inscriptionOptionsUpdateForm.get('physicalLimitation').setValue(3);
        } else {
          this.inscriptionOptionsUpdateForm.get('physicalLimitation').setValue(2);
        }
      } else { this.inscriptionOptionsUpdateForm.get('physicalLimitation').setValue(1); }
    } else { this.inscriptionOptionsUpdateForm.get('physicalLimitation').setValue(0); }

    if (this.birthdateActiveChecked) {
      if (this.birthdateRequiredChecked || this.birthdateVisibleChecked) {
        if (this.birthdateRequiredChecked && this.birthdateVisibleChecked) {
          this.inscriptionOptionsUpdateForm.get('birthdate').setValue(4);
        } else if (this.birthdateVisibleChecked) { this.inscriptionOptionsUpdateForm.get('birthdate').setValue(3); } else {
          this.inscriptionOptionsUpdateForm.get('birthdate').setValue(2);
        }
      } else { this.inscriptionOptionsUpdateForm.get('birthdate').setValue(1); }
    } else { this.inscriptionOptionsUpdateForm.get('birthdate').setValue(0); }

    if (this.genderActiveChecked) {
      if (this.genderRequiredChecked || this.genderVisibleChecked) {
        if (this.genderRequiredChecked && this.genderVisibleChecked) {
          this.inscriptionOptionsUpdateForm.get('gender').setValue(4);
        } else if (this.genderVisibleChecked) { this.inscriptionOptionsUpdateForm.get('gender').setValue(3); } else {
          this.inscriptionOptionsUpdateForm.get('gender').setValue(2);
        }
      } else { this.inscriptionOptionsUpdateForm.get('gender').setValue(1); }
    } else { this.inscriptionOptionsUpdateForm.get('gender').setValue(0); }

    if (this.emailActiveChecked) {
      if (this.emailRequiredChecked || this.emailVisibleChecked) {
        if (this.emailRequiredChecked && this.emailVisibleChecked) {
          this.inscriptionOptionsUpdateForm.get('email').setValue(4);
        } else if (this.emailVisibleChecked) { this.inscriptionOptionsUpdateForm.get('email').setValue(3); } else {
          this.inscriptionOptionsUpdateForm.get('email').setValue(2);
        }
      } else { this.inscriptionOptionsUpdateForm.get('email').setValue(1); }
    } else { this.inscriptionOptionsUpdateForm.get('email').setValue(0); }
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
    this.inscriptionOptionsForm.get('fistNameActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.firstNameActiveChecked = false;
        this.firstNameRequiredChecked = false;
        this.firstNameVisibleChecked = false;
        this.changeRequirements('firstName', this.firstNameRequiredChecked);
      } else {
        this.firstNameActiveChecked = true;
      }
    });

    this.inscriptionOptionsForm.get('fistNameRequired').valueChanges.subscribe(val => {
      if (val === false && this.firstNameActiveChecked === true) {
        this.firstNameRequiredChecked = false;
      } else {
        this.firstNameRequiredChecked = true;
      }
      this.changeRequirements('firstName', this.firstNameRequiredChecked);
    });

    this.inscriptionOptionsForm.get('fistNameVisible').valueChanges.subscribe(val => {
      if (val === false  && this.firstNameActiveChecked === true) {
        this.firstNameVisibleChecked = false;
      } else {
        this.firstNameVisibleChecked = true;
      }
    });

    this.inscriptionOptionsForm.get('lastNameActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.lastNameActiveChecked = false;
        this.lastNameRequiredChecked = false;
        this.lastNameVisibleChecked = false;
        this.changeRequirements('lastName', this.lastNameRequiredChecked);
      } else {
        this.lastNameActiveChecked = true;
      }
    });

    this.inscriptionOptionsForm.get('lastNameRequired').valueChanges.subscribe(val => {
      if (val === false && this.lastNameActiveChecked === true) {
        this.lastNameRequiredChecked = false;
      } else {
        this.lastNameRequiredChecked = true;
      }
      this.changeRequirements('lastName', this.lastNameRequiredChecked);
    });

    this.inscriptionOptionsForm.get('lastNameVisible').valueChanges.subscribe(val => {
      if (val === false  && this.lastNameActiveChecked === true) {
        this.lastNameVisibleChecked = false;
      } else {
        this.lastNameVisibleChecked = true;
      }
    });

    this.inscriptionOptionsForm.get('phoneNumberActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.phoneNumberActiveChecked = false;
        this.phoneNumberRequiredChecked = false;
        this.phoneNumberVisibleChecked = false;
        this.changeRequirements('phoneNumber', this.phoneNumberRequiredChecked);
      } else {
        this.phoneNumberActiveChecked = true;
      }
    });

    this.inscriptionOptionsForm.get('phoneNumberRequired').valueChanges.subscribe(val => {
      if (val === false && this.phoneNumberActiveChecked === true) {
        this.phoneNumberRequiredChecked = false;
      } else {
        this.phoneNumberRequiredChecked = true;
      }
      this.changeRequirements('phoneNumber', this.phoneNumberRequiredChecked);
    });

    this.inscriptionOptionsForm.get('phoneNumberVisible').valueChanges.subscribe(val => {
      if (val === false  && this.phoneNumberActiveChecked === true) {
        this.phoneNumberVisibleChecked = false;
      } else {
        this.phoneNumberVisibleChecked = true;
      }
    });

    this.inscriptionOptionsForm.get('allergyActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.allergyActiveChecked = false;
        this.allergyRequiredChecked = false;
        this.allergyVisibleChecked = false;
        this.changeRequirements('allergy', this.allergyRequiredChecked);
      } else {
        this.allergyActiveChecked = true;
      }
    });

    this.inscriptionOptionsForm.get('allergyRequired').valueChanges.subscribe(val => {
      if (val === false && this.allergyActiveChecked === true) {
        this.allergyRequiredChecked = false;
      } else {
        this.allergyRequiredChecked = true;
      }
      this.changeRequirements('allergy', this.allergyRequiredChecked);
    });

    this.inscriptionOptionsForm.get('allergyVisible').valueChanges.subscribe(val => {
      if (val === false  && this.allergyActiveChecked === true) {
        this.allergyVisibleChecked = false;
      } else {
        this.allergyVisibleChecked = true;
      }
    });

    this.inscriptionOptionsForm.get('physicalLimitationActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.physicalLimitationActiveChecked = false;
        this.physicalLimitationRequiredChecked = false;
        this.physicalLimitationVisibleChecked = false;
        this.changeRequirements('physicalLimitation', this.physicalLimitationRequiredChecked);
      } else {
        this.physicalLimitationActiveChecked = true;
      }
    });

    this.inscriptionOptionsForm.get('physicalLimitationRequired').valueChanges.subscribe(val => {
      if (val === false && this.physicalLimitationActiveChecked === true) {
        this.physicalLimitationRequiredChecked = false;
      } else {
        this.physicalLimitationRequiredChecked = true;
      }
      this.changeRequirements('physicalLimitation', this.physicalLimitationRequiredChecked);
    });

    this.inscriptionOptionsForm.get('physicalLimitationVisible').valueChanges.subscribe(val => {
      if (val === false  && this.physicalLimitationActiveChecked === true) {
        this.physicalLimitationVisibleChecked = false;
      } else {
        this.physicalLimitationVisibleChecked = true;
      }
    });

    this.inscriptionOptionsForm.get('birthdateActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.birthdateActiveChecked = false;
        this.birthdateRequiredChecked = false;
        this.birthdateVisibleChecked = false;
        this.changeRequirements('birthdate', this.birthdateRequiredChecked);
      } else {
        this.birthdateActiveChecked = true;
      }
    });

    this.inscriptionOptionsForm.get('birthdateRequired').valueChanges.subscribe(val => {
      if (val === false && this.birthdateActiveChecked === true) {
        this.birthdateRequiredChecked = false;
      } else {
        this.birthdateRequiredChecked = true;
      }
      this.changeRequirements('birthdate', this.birthdateRequiredChecked);
    });

    this.inscriptionOptionsForm.get('birthdateVisible').valueChanges.subscribe(val => {
      if (val === false  && this.birthdateActiveChecked === true) {
        this.birthdateVisibleChecked = false;
      } else {
        this.birthdateVisibleChecked = true;
      }
    });

    this.inscriptionOptionsForm.get('genderActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.genderActiveChecked = false;
        this.genderRequiredChecked = false;
        this.genderVisibleChecked = false;
        this.changeRequirements('gender', this.genderRequiredChecked);
      } else {
        this.genderActiveChecked = true;
      }
    });

    this.inscriptionOptionsForm.get('genderRequired').valueChanges.subscribe(val => {
      if (val === false && this.genderActiveChecked === true) {
        this.genderRequiredChecked = false;
      } else {
        this.genderRequiredChecked = true;
      }
      this.changeRequirements('gender', this.genderRequiredChecked);
    });

    this.inscriptionOptionsForm.get('genderVisible').valueChanges.subscribe(val => {
      if (val === false  && this.genderActiveChecked === true) {
        this.genderVisibleChecked = false;
      } else {
        this.genderVisibleChecked = true;
      }
    });

    this.inscriptionOptionsForm.get('emailActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.emailActiveChecked = false;
        this.emailRequiredChecked = false;
        this.emailVisibleChecked = false;
        this.changeRequirements('email', this.emailRequiredChecked);
      } else {
        this.emailActiveChecked = true;
      }
    });

    this.inscriptionOptionsForm.get('emailRequired').valueChanges.subscribe(val => {
      if (val === false && this.emailActiveChecked === true) {
        this.emailRequiredChecked = false;
      } else {
        this.emailRequiredChecked = true;
      }
      this.changeRequirements('email', this.emailRequiredChecked);
    });

    this.inscriptionOptionsForm.get('emailVisible').valueChanges.subscribe(val => {
      if (val === false  && this.emailActiveChecked === true) {
        this.emailVisibleChecked = false;
      } else {
        this.emailVisibleChecked = true;
      }
    });
  }

  changeOptionCheckboxes() {
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

  changeVarDb() {
    this.firstNameNumber = +this.inscriptionOptionsArray[0]['firstName'];
    this.lastNameNumber = +this.inscriptionOptionsArray[0]['lastName'];
    this.phoneNumberNumber = +this.inscriptionOptionsArray[0]['phoneNumber'];
    this.allergyNumber = +this.inscriptionOptionsArray[0]['allergy'];
    this.physicalLimitationNumber = +this.inscriptionOptionsArray[0]['physicalLimitation'];
    this.birthdateNumber = +this.inscriptionOptionsArray[0]['birthdate'];
    this.genderNumber = +this.inscriptionOptionsArray[0]['gender'];
    this.emailNumber = +this.inscriptionOptionsArray[0]['email'];

    this.changeOptionCheckboxes();
  }
}
