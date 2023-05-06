import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signup!: FormGroup;
  submitted: boolean = false;
  show: boolean = false;
  user: any = {};
  userSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  signupForm(): void {
    this.signup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {}

  // submitting registration from
  onSubmit() {
    this.submitted = true;
    this.userSubmitted = true;
    if (this.signup.invalid) {
      return;
    }
    const users = {
      firstName: this.signup.value.email,
      lastName: this.signup.value.lastName,
      phone: this.signup.value.number,
    };
    console.log(users);
  }
}
