import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { InscriptionOptionsComponent } from './inscription-options/inscription-options.component';

import { Inscription } from './inscription';
import { InscriptionService } from '../inscription.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  @ViewChild(InscriptionOptionsComponent) inscriptionOptionsChild;

  inscriptionForm = new FormGroup({
    id: new FormControl(0),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    allergy: new FormControl(''),
    physicalLimitation: new FormControl(''),
    birthdate: new FormControl(new Date()),
    gender: new FormControl(''),
    email: new FormControl('')
  });

  /* inscription */
  inscription: Inscription[];
  error = '';
  success = '';
  // formdata: Inscription = new Inscription();

  inscriptionData = new Inscription(0, '', '', 0, '', '', new Date(), '', '');
  inscriptionUpdateData = new Inscription(0, '', '', 0, '', '', new Date(), '', '');

  edit = false;
  editID: number;
  btnText: 'Add inscription';
  editText: 'Edit inscription';

  constructor(private inscriptionService: InscriptionService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getInscription();
  }

  getInscription(): void {
    this.inscriptionService.getAll().subscribe(
      (res: Inscription[]) => {
        this.inscription = res;
        },
      (err) => {
        this.error = err;
      }
    );
  }

  addInscription(f) {
    this.error = '';
    this.success = '';
    console.log(f);

    this.inscriptionService.store(this.inscriptionData)
      .subscribe(
        (res: Inscription[]) => {
          // Update the list of cars
          this.inscription = res;

          // Inform the user
          this.success = 'Created successfully';

          console.log(this.inscriptionForm);

          // Reset the form
          this.inscriptionForm.reset();
        },
        (err) => this.error = err
      );
  }

  updateInscription() {
    this.error = '';
    this.success = '';

    this.inscriptionForm.get('id').setValue(this.editID);

    this.inscriptionService.update(this.inscriptionForm.value)
      .subscribe(
        (res: Inscription[]) => {
          // Update the list of cars
          this.inscription = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          this.inscriptionForm.reset();

          // Return
          this.returnForm();
        },
        (err) => this.error = err
      );
  }

  returnForm() {
    this.edit = false;
    this.editID = null;
    this.inscriptionForm.reset();
  }

  editInscription(id): void {

    this.editID = id;
    this.edit = true;

    const incriptionEditIndex = this.inscription.findIndex(w => w.id === id);
    const inscriptionEditForm = this.inscription[incriptionEditIndex];

    const inscriptionEdit = this.inscription.filter(x => x.id === id);

    this.inscriptionForm.get('firstName').setValue(inscriptionEditForm.firstName);
    this.inscriptionForm.get('lastName').setValue(inscriptionEditForm.lastName);
    this.inscriptionForm.get('phoneNumber').setValue(inscriptionEditForm.phoneNumber);
    this.inscriptionForm.get('allergy').setValue(inscriptionEditForm.allergy);
    this.inscriptionForm.get('physicalLimitation').setValue(inscriptionEditForm.physicalLimitation);
    this.inscriptionForm.get('birthdate').setValue(inscriptionEditForm.birthdate);
    this.inscriptionForm.get('gender').setValue(inscriptionEditForm.gender);
    this.inscriptionForm.get('email').setValue(inscriptionEditForm.email);

    /*
    this.inscriptionService.getInscriptionWithId(id).subscribe(
      (res: Inscription[]) => {
        this.inscription = res;

        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
    */
  }

  deleteInscription(id): void {
    this.success = '';
    this.error   = '';

    this.inscriptionService.delete(+id)
      .subscribe(
        (res: Inscription[]) => {
          this.inscription = res;
          this.success = 'Deleted successfully';
        },
        (err) => this.error = err
      );
  }

  onSubmit() {
    this.error = '';
    this.success = '';

    this.inscriptionService.store(this.inscriptionForm.value)
      .subscribe(
        (res: Inscription[]) => {
          // Update the list of cars
          this.inscription = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          this.inscriptionForm.reset();
        },
        (err) => this.error = err
      );
  }
}
