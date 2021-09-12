import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CustomvalidationService } from './customvalidation.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  newUserDet: NewUserDet = {
    firstName: ['', [Validators.required]],
    middleName: "",
    lastName: ['', [Validators.required]],
    userName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    pass1: ['', [Validators.required]],
    pass2: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]]
  }

  passwordMatcher = {
    validator: this.customValidator.MatchPassword('pass1', 'pass2'),
  }

  constructor(private httpClient: HttpClient, private customValidator: CustomvalidationService) { }

  registerUser(filledNewUserDet: any) {
    // console.log('success');
    return this.httpClient.post('//127.0.0.1:8000/create', filledNewUserDet).subscribe();
  }
}

export interface NewUserDet {
  firstName: [string, [any]],
  middleName: string,
  lastName: [string, [any]],
  userName: [string, [any]],
  email: [string, [any, any]],
  pass1: [string, any],
  pass2: [string, [any]],
  phone: [string, [any, any, any]]
}