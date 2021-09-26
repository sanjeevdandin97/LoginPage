import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {
  submitted = false;

  checkoutForm = this.formBuilder.group(this.regServ.newUserDet, this.regServ.passwordMatcher);

  constructor(private regServ: RegistrationService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  onSubmit() {
    this.submitted = true;
    if (this.checkoutForm.valid) {
      this.regServ.registerUser(this.checkoutForm.value);
      this.router.navigate(['/login']);
    }
  }

  get checkoutFormControl() {
    return this.checkoutForm.controls;
  }

}
