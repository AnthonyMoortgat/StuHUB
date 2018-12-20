import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {MemberlistOptionService} from './memberlist-option.service';
import {MemberlistOptions} from './MemberlistOptions';

@Component({
  selector: 'app-memberlist-options',
  templateUrl: './memberlist-options.component.html',
  styleUrls: ['./memberlist-options.component.scss']
})
export class MermberlistOptionsComponent implements OnInit {

  @Input() memberlistForm: FormGroup;

  memberlistOptionsForm = new FormGroup({
    fistNameActive: new FormControl(),
    fistNameRequired: new FormControl(),
    fistNameVisible: new FormControl(),
    lastNameActive: new FormControl(),
    lastNameRequired: new FormControl(),
    lastNameVisible: new FormControl(),
    rolActive: new FormControl(),
    rolRequired: new FormControl(),
    rolVisible: new FormControl(),
    emailActive: new FormControl(),
    emailRequired: new FormControl(),
    emailVisible: new FormControl(),
    birthdateActive: new FormControl(),
    birthdateRequired: new FormControl(),
    birthdateVisible: new FormControl(),
    organisationActive: new FormControl(),
    organisationRequired: new FormControl(),
    organisationVisible: new FormControl()
  });

  memberlistOptionsUpdateForm = new FormGroup({
    organisationId: new FormControl(''),
    firstName: new FormControl(0),
    lastName: new FormControl(0),
    rol: new FormControl(0),
    email: new FormControl(0),
    birthdate: new FormControl(0),
    organisation: new FormControl(0)
  });

  memberlistOptionsArray: MemberlistOptions[];
  firstNameActiveChecked = false;
  firstNameRequiredChecked = false;
  firstNameVisibleChecked = false;
  lastNameActiveChecked = false;
  lastNameRequiredChecked = false;
  lastNameVisibleChecked = false;
  rolActiveChecked = false;
  rolRequiredChecked = false;
  rolVisibleChecked = false;
  emailActiveChecked = false;
  emailRequiredChecked = false;
  emailVisibleChecked = false;
  birthdateActiveChecked = false;
  birthdateRequiredChecked = false;
  birthdateVisibleChecked = false;
  organisationActiveChecked = false;
  organisationRequiredChecked = false;
  organisationVisibleChecked = false;

  firstNameNumber = 4;
  lastNameNumber = 3;
  birthdateNumber = 4;
  rolnumber = 1;
  emailNumber = 2;
  organisationNumber = 3;

  error = '';
  constructor(private memberlistOptionsService: MemberlistOptionService) { }

  ngOnInit() {
    this.getOptions();
    this.onChanges();
  }

  getOptions(): void {
    this.memberlistOptionsService.getAll().subscribe(
      (res: MemberlistOptions[]) => {
        this.memberlistOptionsArray = res;
        this.changeVarDb();
      },
      (err) => {
        this.error = err;
      }
    );
  }

  onSubmit() {
    this.changeFormValue(sessionStorage.getItem('Orgname'));

    this.memberlistOptionsService.update(this.memberlistOptionsUpdateForm.value)
      .subscribe(
        (res: MemberlistOptions[]) => {
          this.memberlistOptionsArray = res;
        },
        (err) => this.error = err
      );
  }

  changeFormValue(organisationId) {
    this.memberlistOptionsUpdateForm.get('organisationId').setValue(organisationId);

    if (this.firstNameActiveChecked) {
      if (this.firstNameRequiredChecked || this.firstNameVisibleChecked) {
        if (this.firstNameRequiredChecked && this.firstNameVisibleChecked) {
          this.memberlistOptionsUpdateForm.get('firstName').setValue(4);
        } else if (this.firstNameVisibleChecked) { this.memberlistOptionsUpdateForm.get('firstName').setValue(3); } else {
          this.memberlistOptionsUpdateForm.get('firstName').setValue(2);
        }
      } else { this.memberlistOptionsUpdateForm.get('firstName').setValue(1); }
    } else { this.memberlistOptionsUpdateForm.get('firstName').setValue(0); }

    if (this.lastNameActiveChecked) {
      if (this.lastNameRequiredChecked || this.lastNameVisibleChecked) {
        if (this.lastNameRequiredChecked && this.lastNameVisibleChecked) {
          this.memberlistOptionsUpdateForm.get('lastName').setValue(4);
        } else if (this.lastNameVisibleChecked) { this.memberlistOptionsUpdateForm.get('lastName').setValue(3); } else {
          this.memberlistOptionsUpdateForm.get('lastName').setValue(2);
        }
      } else { this.memberlistOptionsUpdateForm.get('lastName').setValue(1); }
    } else { this.memberlistOptionsUpdateForm.get('lastName').setValue(0); }

    if (this.birthdateActiveChecked) {
      if (this.birthdateRequiredChecked || this.birthdateVisibleChecked) {
        if (this.birthdateRequiredChecked && this.birthdateVisibleChecked) {
          this.memberlistOptionsUpdateForm.get('birthdate').setValue(4);
        } else if (this.birthdateVisibleChecked) { this.memberlistOptionsUpdateForm.get('birthdate').setValue(3); } else {
          this.memberlistOptionsUpdateForm.get('birthdate').setValue(2);
        }
      } else { this.memberlistOptionsUpdateForm.get('birthdate').setValue(1); }
    } else { this.memberlistOptionsUpdateForm.get('birthdate').setValue(0); }

    if (this.emailActiveChecked) {
      if (this.emailRequiredChecked || this.emailVisibleChecked) {
        if (this.emailRequiredChecked && this.emailVisibleChecked) {
          this.memberlistOptionsUpdateForm.get('email').setValue(4);
        } else if (this.emailVisibleChecked) { this.memberlistOptionsUpdateForm.get('email').setValue(3); } else {
          this.memberlistOptionsUpdateForm.get('email').setValue(2);
        }
      } else { this.memberlistOptionsUpdateForm.get('email').setValue(1); }
    } else { this.memberlistOptionsUpdateForm.get('email').setValue(0); }

    if (this.rolActiveChecked) {
      if (this.rolRequiredChecked || this.rolVisibleChecked) {
        if (this.rolRequiredChecked && this.rolVisibleChecked) {
          this.memberlistOptionsUpdateForm.get('rol').setValue(4);
        } else if (this.rolVisibleChecked) { this.memberlistOptionsUpdateForm.get('rol').setValue(3); } else {
          this.memberlistOptionsUpdateForm.get('rol').setValue(2);
        }
      } else { this.memberlistOptionsUpdateForm.get('rol').setValue(1); }
    } else { this.memberlistOptionsUpdateForm.get('rol').setValue(0); }

    if (this.organisationActiveChecked) {
      if (this.organisationRequiredChecked || this.organisationVisibleChecked) {
        if (this.organisationRequiredChecked && this.organisationVisibleChecked) {
          this.memberlistOptionsUpdateForm.get('organisation').setValue(4);
        } else if (this.organisationVisibleChecked) { this.memberlistOptionsUpdateForm.get('organisation').setValue(3); } else {
          this.memberlistOptionsUpdateForm.get('organisation').setValue(2);
        }
      } else { this.memberlistOptionsUpdateForm.get('organisation').setValue(1); }
    } else { this.memberlistOptionsUpdateForm.get('organisation').setValue(0); }
  }

  changeRequirements(name, boolean) {
    if (boolean) {
      this.memberlistForm.controls[name].setValidators(Validators.required);
      this.memberlistForm.controls[name].updateValueAndValidity();
    } else {
      this.memberlistForm.controls[name].setValidators(null);
      this.memberlistForm.controls[name].updateValueAndValidity();
    }
  }

  onChanges(): void {
    this.memberlistOptionsForm.get('fistNameActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.firstNameActiveChecked = false;
        this.firstNameRequiredChecked = false;
        this.firstNameVisibleChecked = false;
        this.changeRequirements('firstName', this.firstNameRequiredChecked);
      } else {
        this.firstNameActiveChecked = true;
      }
    });

    this.memberlistOptionsForm.get('fistNameRequired').valueChanges.subscribe(val => {
      if (val === false && this.firstNameActiveChecked === true) {
        this.firstNameRequiredChecked = false;
      } else {
        this.firstNameRequiredChecked = true;
      }
      this.changeRequirements('firstName', this.firstNameRequiredChecked);
    });

    this.memberlistOptionsForm.get('fistNameVisible').valueChanges.subscribe(val => {
      if (val === false  && this.firstNameActiveChecked === true) {
        this.firstNameVisibleChecked = false;
      } else {
        this.firstNameVisibleChecked = true;
      }
    });

    this.memberlistOptionsForm.get('lastNameActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.lastNameActiveChecked = false;
        this.lastNameRequiredChecked = false;
        this.lastNameVisibleChecked = false;
        this.changeRequirements('lastName', this.lastNameRequiredChecked);
      } else {
        this.lastNameActiveChecked = true;
      }
    });

    this.memberlistOptionsForm.get('lastNameRequired').valueChanges.subscribe(val => {
      if (val === false && this.lastNameActiveChecked === true) {
        this.lastNameRequiredChecked = false;
      } else {
        this.lastNameRequiredChecked = true;
      }
      this.changeRequirements('lastName', this.lastNameRequiredChecked);
    });

    this.memberlistOptionsForm.get('lastNameVisible').valueChanges.subscribe(val => {
      if (val === false  && this.lastNameActiveChecked === true) {
        this.lastNameVisibleChecked = false;
      } else {
        this.lastNameVisibleChecked = true;
      }
    });
    this.memberlistOptionsForm.get('rolActive').valueChanges.subscribe(val => {
      if (val === false  && this.rolActiveChecked === true) {
        this.rolActiveChecked = false;
        this.rolRequiredChecked = false;
        this.rolVisibleChecked = false;
        this.changeRequirements('rol', this.rolRequiredChecked);
      } else {
        this.rolActiveChecked = true;
      }
    });

    this.memberlistOptionsForm.get('rolRequired').valueChanges.subscribe(val => {
      if (val === false  && this.rolRequiredChecked === true) {
        this.rolRequiredChecked = false;
      } else {
        this.rolRequiredChecked = true;
      }
      this.changeRequirements('rol', this.rolRequiredChecked);
    });

    this.memberlistOptionsForm.get('rolVisible').valueChanges.subscribe(val => {
      if (val === false  && this.rolVisibleChecked === true) {
        this.rolVisibleChecked = false;
      } else {
        this.rolVisibleChecked = true;
      }
    });

    this.memberlistOptionsForm.get('birthdateActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.birthdateActiveChecked = false;
        this.birthdateRequiredChecked = false;
        this.birthdateVisibleChecked = false;
        this.changeRequirements('birthdate', this.birthdateRequiredChecked);
      } else {
        this.birthdateActiveChecked = true;
      }
    });

    this.memberlistOptionsForm.get('birthdateRequired').valueChanges.subscribe(val => {
      if (val === false && this.birthdateActiveChecked === true) {
        this.birthdateRequiredChecked = false;
      } else {
        this.birthdateRequiredChecked = true;
      }
      this.changeRequirements('birthdate', this.birthdateRequiredChecked);
    });

    this.memberlistOptionsForm.get('birthdateVisible').valueChanges.subscribe(val => {
      if (val === false  && this.birthdateActiveChecked === true) {
        this.birthdateVisibleChecked = false;
      } else {
        this.birthdateVisibleChecked = true;
      }
    });

    this.memberlistOptionsForm.get('emailActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.emailActiveChecked = false;
        this.emailRequiredChecked = false;
        this.emailVisibleChecked = false;
        this.changeRequirements('email', this.emailRequiredChecked);
      } else {
        this.emailActiveChecked = true;
      }
    });

    this.memberlistOptionsForm.get('emailRequired').valueChanges.subscribe(val => {
      if (val === false && this.emailActiveChecked === true) {
        this.emailRequiredChecked = false;
      } else {
        this.emailRequiredChecked = true;
      }
      this.changeRequirements('email', this.emailRequiredChecked);
    });

    this.memberlistOptionsForm.get('emailVisible').valueChanges.subscribe(val => {
      if (val === false  && this.emailActiveChecked === true) {
        this.emailVisibleChecked = false;
      } else {
        this.emailVisibleChecked = true;
      }
    });

    this.memberlistOptionsForm.get('organisationActive').valueChanges.subscribe(val => {
      if (val === false) {
        this.organisationActiveChecked = false;
        this.organisationRequiredChecked = false;
        this.organisationVisibleChecked = false;
        this.changeRequirements('organisation', this.organisationRequiredChecked);
      } else {
        this.organisationActiveChecked = true;
      }
    });

    this.memberlistOptionsForm.get('organisationRequired').valueChanges.subscribe(val => {
      if (val === false && this.organisationActiveChecked === true) {
        this.organisationRequiredChecked = false;
      } else {
        this.organisationRequiredChecked = true;
      }
      this.changeRequirements('organisation', this.organisationRequiredChecked);
    });

    this.memberlistOptionsForm.get('organisationVisible').valueChanges.subscribe(val => {
      if (val === false  && this.organisationActiveChecked === true) {
        this.organisationVisibleChecked = false;
      } else {
        this.organisationVisibleChecked = true;
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

    switch (this.rolnumber) {
      case 0:
        break;

      case 1:
        this.rolActiveChecked = true;
        break;

      case 2:
        this.rolActiveChecked = true;
        this.rolRequiredChecked = true;
        this.changeRequirements('rol', this.rolRequiredChecked);
        break;

      case 3:
        this.rolActiveChecked = true;
        this.rolVisibleChecked = true;
        break;

      case 4:
        this.rolActiveChecked = true;
        this.rolRequiredChecked = true;
        this.rolVisibleChecked = true;
        this.changeRequirements('email', this.rolRequiredChecked);
        break;
    }

    switch (this.organisationNumber) {
      case 0:
        break;

      case 1:
        this.organisationActiveChecked = true;
        break;

      case 2:
        this.organisationActiveChecked = true;
        this.organisationRequiredChecked = true;
        this.changeRequirements('organisation', this.organisationRequiredChecked);
        break;

      case 3:
        this.organisationActiveChecked = true;
        this.organisationVisibleChecked = true;
        break;

      case 4:
        this.organisationActiveChecked = true;
        this.organisationRequiredChecked = true;
        this.organisationVisibleChecked = true;
        this.changeRequirements('organisation', this.organisationRequiredChecked);
        break;
    }
  }

  changeVarDb() {
    this.firstNameNumber = +this.memberlistOptionsArray[0]['firstName'];
    this.lastNameNumber = +this.memberlistOptionsArray[0]['lastName'];
    this.rolnumber = +this.memberlistOptionsArray[0]['role'];
    this.birthdateNumber = +this.memberlistOptionsArray[0]['birthdate'];
    this.emailNumber = +this.memberlistOptionsArray[0]['email'];
    this.organisationNumber = +this.memberlistOptionsArray[0]['organisation'];

    this.changeOptionCheckboxes();
  }
}
