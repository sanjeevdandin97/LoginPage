import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  submitted = false;

  checkoutForm = this.formBuilder.group(this.regServ.newUserDet, this.regServ.passwordMatcher);

  constructor(private regServ: RegistrationService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.checkoutForm.valid)
      this.regServ.registerUser(this.checkoutForm.value);
    else
      console.log('form is invalid');
  }

  get checkoutFormControl() {

    return this.checkoutForm.controls;
  }

}
