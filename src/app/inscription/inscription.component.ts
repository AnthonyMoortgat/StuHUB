import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      allergy: ['', Validators.required],
      physicalLimitation: ['', Validators.required],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }


    const name: string = this.messageForm.get('name').value;
    const lastName: string = this.messageForm.get('lastName').value;
    const phoneNumber: string = this.messageForm.get('phoneNumber').value;
    const allergy: string = this.messageForm.get('allergy').value;
    const physicalLimitation: string = this.messageForm.get('physicalLimitation').value;
    const birthdate: string = this.messageForm.get('birthdate').value;
    const gender: string = this.messageForm.get('gender').value;
    const email: string = this.messageForm.get('email').value;

    this.success = true;
  }
}
