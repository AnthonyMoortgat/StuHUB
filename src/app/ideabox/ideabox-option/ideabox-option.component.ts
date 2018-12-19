import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {IdeaboxOption} from './ideabox-option';
import {Ideabox} from '../ideabox';
import {IdeaboxOptionService} from './ideabox-option.service';

@Component({
  selector: 'app-ideabox-option',
  templateUrl: './ideabox-option.component.html',
  styleUrls: ['./ideabox-option.component.scss']
})
export class IdeaboxOptionComponent implements OnInit {


  @Input()ideaboxForm: FormGroup;
  ideaboxOptionForm = new FormGroup({
    subjectOptionActive: new FormControl(),
    subjectOptionRequired: new FormControl(),
    subjectOptionVisible: new FormControl(),
    ideaOptionActive: new FormControl(),
    ideaOptionRequired: new FormControl(),
    ideaOptionVisible: new FormControl(),
    firstNameOptionActive: new FormControl(),
    firstNameOptionRequired: new FormControl(),
    firstNameOptionVisible: new FormControl(),
    lastNameOptionActive: new FormControl(),
    lastNameOptionRequired: new FormControl(),
    lastNameOptionVisible: new FormControl(),
    emailOptionActive: new FormControl(),
    emailOptionRequired: new FormControl(),
    emailOptionVisible: new FormControl()
  });
  /*       organisationID: string,
    idOption?: number,
    subjectOption?: number,
    ideaOption?: number,
    firstNameOption?: number,
    lastNameOption?: number,
    emailOption?: number

*/

  ideaboxOptionUpdateForm = new FormGroup({
    organisationID: new FormControl(''),
    subject: new FormControl(0),
    idea: new FormControl(0),
    firstName: new FormControl(0),
    lastName: new FormControl(0),
    email: new FormControl(0)
  });



  ideaboxOptionArray: IdeaboxOption[];

  subjectOptionActiveChk = false;
  subjectOptionRequiredChk = false;
  subjectOptionVisibleChk = false;

  ideaOptionActiveChk = false;
  ideaOptionRequiredChk = false;
  ideaOptionVisibleChk = false;

  firstNameOptionActiveChk = false;
  firstNameOptionRequiredChk = false;
  firstNameOptionVisibleChk = false;

  lastNameOptionActiveChk = false;
  lastNameOptionRequiredChk = false;
  lastNameOptionVisibleChk = false;

  emailOptionActiveChk = false;
  emailOptionRequiredChk = false;
  emailOptionVisibleChk = false;



subjectNum = 4;
ideaNum = 3;
firstNameNum = 4;
lastnameNum = 3;
emailNum = 1;

  error = '';


  constructor(private ideaboxOptionService: IdeaboxOptionService) { }

  ngOnInit() {
    this.getOptions();
    this.changeOptions();
    this.onChanges();
  }

  getOptions(): void {
    this.ideaboxOptionService.getAll().subscribe(
      (res: IdeaboxOption[]) => {
        this.ideaboxOptionArray = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  onSubmit() {
    this.changeFormValue('Enigma');

    this.ideaboxOptionService.update(this.ideaboxOptionUpdateForm.value)
      .subscribe(
        (res: IdeaboxOption[]) => {
          this.ideaboxOptionArray = res;
        },
        (err) => this.error = err
      );
  }

changeFormValue(organisationID) {
    this.ideaboxOptionUpdateForm.get('organisationID').setValue(organisationID);


    /*Optie Subject*/
    if (this.subjectOptionActiveChk) {
      if (this.subjectOptionRequiredChk || this.subjectOptionVisibleChk) {
        if (this.subjectOptionRequiredChk && this.subjectOptionVisibleChk) {
          this.ideaboxOptionUpdateForm.get('subject').setValue(4);
        } else if (this.subjectOptionVisibleChk) {
          this.ideaboxOptionUpdateForm.get('subject').setValue(3);
        } else {
          this.ideaboxOptionUpdateForm.get('subject').setValue(2);
        }
      } else {this.ideaboxOptionUpdateForm.get('subject').setValue(1); }
    } else { this.ideaboxOptionUpdateForm.get('subject').setValue(0); }

  /*Idea Subject*/
  if (this.ideaOptionActiveChk) {
    if (this.ideaOptionRequiredChk || this.ideaOptionVisibleChk) {
      if (this.ideaOptionRequiredChk && this.ideaOptionVisibleChk) {
        this.ideaboxOptionUpdateForm.get('idea').setValue(4);
      } else if (this.ideaOptionVisibleChk) {
        this.ideaboxOptionUpdateForm.get('idea').setValue(3);
      } else {
        this.ideaboxOptionUpdateForm.get('idea').setValue(2);
      }
    } else {this.ideaboxOptionUpdateForm.get('idea').setValue(1); }
  } else { this.ideaboxOptionUpdateForm.get('idea').setValue(0); }

  /*Firstname Subject*/
  if (this.firstNameOptionActiveChk) {
    if (this.firstNameOptionRequiredChk || this.firstNameOptionVisibleChk) {
      if (this.firstNameOptionRequiredChk && this.firstNameOptionVisibleChk) {
        this.ideaboxOptionUpdateForm.get('firstName').setValue(4);
      } else if (this.firstNameOptionVisibleChk) {
        this.ideaboxOptionUpdateForm.get('firstName').setValue(3);
      } else {
        this.ideaboxOptionUpdateForm.get('firstName').setValue(2);
      }
    } else {this.ideaboxOptionUpdateForm.get('firstName').setValue(1); }
  } else { this.ideaboxOptionUpdateForm.get('firstName').setValue(0); }

  /*Lastname Subject*/
  if (this.lastNameOptionActiveChk) {
    if (this.lastNameOptionRequiredChk || this.lastNameOptionVisibleChk) {
      if (this.lastNameOptionRequiredChk && this.lastNameOptionVisibleChk) {
        this.ideaboxOptionUpdateForm.get('lastName').setValue(4);
      } else if (this.lastNameOptionVisibleChk) {
        this.ideaboxOptionUpdateForm.get('lastName').setValue(3);
      } else {
        this.ideaboxOptionUpdateForm.get('lastName').setValue(2);
      }
    } else {this.ideaboxOptionUpdateForm.get('lastName').setValue(1); }
  } else { this.ideaboxOptionUpdateForm.get('lastName').setValue(0); }

  /*Email Subject*/
  if (this.emailOptionActiveChk) {
    if (this.emailOptionRequiredChk || this.emailOptionVisibleChk) {
      if (this.emailOptionRequiredChk && this.emailOptionVisibleChk) {
        this.ideaboxOptionUpdateForm.get('email').setValue(4);
      } else if (this.emailOptionVisibleChk) {
        this.ideaboxOptionUpdateForm.get('email').setValue(3);
      } else {
        this.ideaboxOptionUpdateForm.get('email').setValue(2);
      }
    } else {this.ideaboxOptionUpdateForm.get('email').setValue(1); }
  } else { this.ideaboxOptionUpdateForm.get('email').setValue(0); }


}

changeRequirements(name, boolean) {
    if (boolean) {
      this.ideaboxForm.controls[name].setValidators(Validators.required);
      this.ideaboxForm.controls[name].updateValueAndValidity();
    } else {
      this.ideaboxForm.controls[name].setValidators(null);
      this.ideaboxForm.controls[name].updateValueAndValidity();
    }
}

onChanges(): void {
    this.ideaboxOptionForm.get('subjectOptionActive').valueChanges.subscribe(value => {
      if (value === false) {
        this.subjectOptionVisibleChk = false;
        this.subjectOptionRequiredChk = false;
        this.subjectOptionActiveChk = false;
        this.changeRequirements('subject', this.subjectOptionRequiredChk);
      } else {
        this.subjectOptionActiveChk = true;
      }
    });
    this.ideaboxOptionForm.get('subjectOptionRequired').valueChanges.subscribe(value => {
      if (value === false && this.subjectOptionActiveChk === true) {
        this.subjectOptionRequiredChk = false;
      } else {
        this.subjectOptionRequiredChk = true;
      }
      this.changeRequirements('subject', this.subjectOptionRequiredChk);
    });
    this.ideaboxOptionForm.get('subjectOptionVisible').valueChanges.subscribe(value => {
      if (value === false && this.subjectOptionActiveChk === true) {
        this.subjectOptionVisibleChk = false;
      } else {
        this.subjectOptionVisibleChk = true;
      }
    });


    this.ideaboxOptionForm.get('ideaOptionActive').valueChanges.subscribe(value => {
    if (value === false) {
      this.ideaOptionVisibleChk = false;
      this.ideaOptionRequiredChk = false;
      this.ideaOptionActiveChk = false;
      this.changeRequirements('idea', this.ideaOptionRequiredChk);
    } else {
      this.ideaOptionActiveChk = true;
    }
  });
    this.ideaboxOptionForm.get('ideaOptionRequired').valueChanges.subscribe(value => {
    if (value === false && this.ideaOptionActiveChk === true) {
      this.ideaOptionRequiredChk = false;
    } else {
      this.ideaOptionRequiredChk = true;
    }
    this.changeRequirements('idea', this.ideaOptionRequiredChk);
  });
    this.ideaboxOptionForm.get('ideaOptionVisible').valueChanges.subscribe(value => {
    if (value === false && this.ideaOptionActiveChk === true) {
      this.ideaOptionVisibleChk = false;
    } else {
      this.ideaOptionVisibleChk = true;
    }
  });


    this.ideaboxOptionForm.get('firstNameOptionActive').valueChanges.subscribe(value => {
    if (value === false) {
      this.firstNameOptionVisibleChk = false;
      this.firstNameOptionRequiredChk = false;
      this.firstNameOptionActiveChk = false;
      this.changeRequirements('firstName', this.firstNameOptionRequiredChk);
    } else {
      this.firstNameOptionActiveChk = true;
    }
  });
    this.ideaboxOptionForm.get('firstNameOptionRequired').valueChanges.subscribe(value => {
    if (value === false && this.firstNameOptionActiveChk === true) {
      this.firstNameOptionRequiredChk = false;
    } else {
      this.firstNameOptionRequiredChk = true;
    }
    this.changeRequirements('firstName', this.firstNameOptionRequiredChk);
  });
    this.ideaboxOptionForm.get('firstNameOptionVisible').valueChanges.subscribe(value => {
    if (value === false && this.firstNameOptionActiveChk === true) {
      this.firstNameOptionVisibleChk = false;
    } else {
      this.firstNameOptionVisibleChk = true;
    }
  });


    this.ideaboxOptionForm.get('lastNameOptionActive').valueChanges.subscribe(value => {
    if (value === false) {
      this.lastNameOptionVisibleChk = false;
      this.lastNameOptionRequiredChk = false;
      this.lastNameOptionActiveChk = false;
      this.changeRequirements('lastName', this.lastNameOptionRequiredChk);
    } else {
      this.lastNameOptionActiveChk = true;
    }
  });
    this.ideaboxOptionForm.get('lastNameOptionRequired').valueChanges.subscribe(value => {
    if (value === false && this.lastNameOptionActiveChk === true) {
      this.lastNameOptionRequiredChk = false;
    } else {
      this.lastNameOptionRequiredChk = true;
    }
    this.changeRequirements('lastName', this.lastNameOptionRequiredChk);
  });
    this.ideaboxOptionForm.get('lastNameOptionVisible').valueChanges.subscribe(value => {
    if (value === false && this.lastNameOptionActiveChk === true) {
      this.lastNameOptionVisibleChk = false;
    } else {
      this.lastNameOptionVisibleChk = true;
    }
  });


    this.ideaboxOptionForm.get('emailOptionActive').valueChanges.subscribe(value => {
    if (value === false) {
      this.emailOptionVisibleChk = false;
      this.emailOptionRequiredChk = false;
      this.emailOptionActiveChk = false;
      this.changeRequirements('email', this.emailOptionRequiredChk);
    } else {
      this.emailOptionActiveChk = true;
    }
  });
    this.ideaboxOptionForm.get('emailOptionRequired').valueChanges.subscribe(value => {
    if (value === false && this.emailOptionActiveChk === true) {
      this.emailOptionRequiredChk = false;
    } else {
      this.emailOptionRequiredChk = true;
    }
    this.changeRequirements('email', this.emailOptionRequiredChk);
  });
    this.ideaboxOptionForm.get('emailOptionVisible').valueChanges.subscribe(value => {
    if (value === false && this.emailOptionActiveChk === true) {
      this.emailOptionVisibleChk = false;
    } else {
      this.emailOptionVisibleChk = true;
    }
  });


}

changeOptions() {

    switch (this.subjectNum) {
      case 0:
        break;

      case 1:
        this.subjectOptionActiveChk = true;
        break;

      case 2:
        this.subjectOptionActiveChk = true;
        this.subjectOptionRequiredChk = true;
        this.changeRequirements('subject', this.subjectOptionRequiredChk);
        break;

      case 3:
        this.subjectOptionActiveChk = true;
        this.subjectOptionVisibleChk = true;
        break;

      case 4:
        this.subjectOptionActiveChk = true;
        this.subjectOptionRequiredChk = true;
        this.subjectOptionVisibleChk = true;
        this.changeRequirements('subject', this.subjectOptionRequiredChk);
        break;
    }


    switch (this.ideaNum) {
    case 0:
      break;

    case 1:
      this.ideaOptionActiveChk = true;
      break;

    case 2:
      this.ideaOptionActiveChk = true;
      this.ideaOptionRequiredChk = true;
      this.changeRequirements('idea', this.ideaOptionRequiredChk);
      break;

    case 3:
      this.ideaOptionActiveChk = true;
      this.ideaOptionVisibleChk = true;
      break;

    case 4:
      this.ideaOptionActiveChk = true;
      this.ideaOptionRequiredChk = true;
      this.ideaOptionVisibleChk = true;
      this.changeRequirements('idea', this.ideaOptionRequiredChk);
      break;
  }


    switch (this.firstNameNum) {
    case 0:
      break;

    case 1:
      this.firstNameOptionActiveChk = true;
      break;

    case 2:
      this.firstNameOptionActiveChk = true;
      this.firstNameOptionRequiredChk = true;
      this.changeRequirements('firstName', this.firstNameOptionRequiredChk);
      break;

    case 3:
      this.firstNameOptionActiveChk = true;
      this.firstNameOptionVisibleChk = true;
      break;

    case 4:
      this.firstNameOptionActiveChk = true;
      this.firstNameOptionRequiredChk = true;
      this.firstNameOptionVisibleChk = true;
      this.changeRequirements('firstName', this.firstNameOptionRequiredChk);
      break;
  }


    switch (this.lastnameNum) {
    case 0:
      break;

    case 1:
      this.lastNameOptionActiveChk = true;
      break;

    case 2:
      this.lastNameOptionActiveChk = true;
      this.lastNameOptionRequiredChk = true;
      this.changeRequirements('lastName', this.lastNameOptionRequiredChk);
      break;

    case 3:
      this.lastNameOptionActiveChk = true;
      this.lastNameOptionVisibleChk = true;
      break;

    case 4:
      this.lastNameOptionActiveChk = true;
      this.lastNameOptionRequiredChk = true;
      this.lastNameOptionVisibleChk = true;
      this.changeRequirements('lastName', this.lastNameOptionRequiredChk);
      break;
  }


    switch (this.emailNum) {
    case 0:
      break;

    case 1:
      this.emailOptionActiveChk = true;
      break;

    case 2:
      this.emailOptionActiveChk = true;
      this.emailOptionRequiredChk = true;
      this.changeRequirements('email', this.emailOptionRequiredChk);
      break;

    case 3:
      this.emailOptionActiveChk = true;
      this.emailOptionVisibleChk = true;
      break;

    case 4:
      this.emailOptionActiveChk = true;
      this.emailOptionRequiredChk = true;
      this.emailOptionVisibleChk = true;
      this.changeRequirements('email', this.emailOptionRequiredChk);
      break;
  }


}

}
