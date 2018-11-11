import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Inscription } from './inscription';
import { InscriptionService } from '../inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  /* inscription */
  inscription: Inscription[];
  error = '';
  success = '';

  inscriptionData = new Inscription(0, '', '', 0, '', '', new Date(), true, '');


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


  editInscription(): void {

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
}
