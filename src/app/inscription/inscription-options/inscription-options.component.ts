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
    fistNameForm: new FormControl(),
    fistNameVisible: new FormControl()
  });

  fistNameOptionsList: Boolean[];

  constructor() { }

  ngOnInit() {
    this.inscriptionOptions.get('firstNameActive').setValue(true);
  }

  onSubmit() {

  }
}
