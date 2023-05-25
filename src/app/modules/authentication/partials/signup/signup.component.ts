import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  section = 1;
  // userForm!: FormGroup;
  // personal!: FormGroup;
  submitted: boolean = false;

  constructor(private FormBuilder: FormBuilder) {}

  ngOnInit(): void {
    // this.userForm = this.FormBuilder.group({
    //    signup
    //   personal: this.FormBuilder.group({
    //     firstName: ['', [Validators.required]],
    //     lastName: ['', [Validators.required]],
    //     number: ['', [Validators.required, Validators.minLength(10)]],
    //   }),
    //    address
    //   address: this.FormBuilder.group({
    //     region: ['', [Validators.required]],
    //     address: ['', [Validators.required]],
    //     city: ['', [Validators.required, Validators.minLength(10)]],
    //     regionName: ['', [Validators.required]],
    //   }),
    //    identity
    //   identityCard: this.FormBuilder.group({
    //     card: ['', [Validators.required]],
    //     idNumber: ['', [Validators.required]],
    //   }),
    // });
  }

  // public nextSection(): void {
  //   this.submitted = true;
  //   if (this.personal.invalid) {
  //     return;
  //     this.section = this.section + 1;
  //   } else if (this.section < 4) {
  //     this.section = this.section + 1;
  //   }
  //   console.log(this.personal.value);
  // }

  public nextSection(): void {
    if (this.section < 4) {
      this.section = this.section + 1;
    }
  }

  public prevSection(): void {
    if (this.section > 1) {
      this.section = this.section - 1;
    }
  }

  submit(): void {}
}
