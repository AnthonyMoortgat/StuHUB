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

  constructor(private inscriptionService: InscriptionService) {
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
}
