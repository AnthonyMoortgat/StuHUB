import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { Inscription } from './inscription';
import { InscriptionService } from '../inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    allergy: new FormControl('', Validators.required),
    physicalLimitation: new FormControl('', Validators.required),
    birthdate: new FormControl(new Date(), Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  /* inscription */
  inscription: Inscription[];
  error = '';
  success = '';

  inscriptionData = new Inscription(0, '', '', 0, '', '', new Date(), true, '');
  inscriptionUpdateData = new Inscription(0, '', '', 0, '', '', new Date(), true, '');

  edit = false;
  editID: number;

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

    this.inscriptionService.store(this.inscriptionData)
      .subscribe(
        (res: Inscription[]) => {
          // Update the list of cars
          this.inscription = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );
  }

  updateInscription(f) {


    /*this.error = '';
    this.success = '';

    this.inscriptionService.update(this.inscriptionUpdateData)
      .subscribe(
        (res: Inscription[]) => {
          // Update the list of cars
          this.inscription = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );*/
  }


  editInscription(id): void {

    this.editID = id;
    this.edit = true;

    console.log(this.editID);
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
          this.inscriptionForm.value.reset();
        },
        (err) => this.error = err
      );
  }
}
