import { Component, OnInit } from '@angular/core';
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
  optionsData = new InscriptionOptions();

  error = '';

  constructor(private inscriptionOptionsService: InscriptionOptionsService) { }

  ngOnInit() {
    this.getOptions();
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
}
