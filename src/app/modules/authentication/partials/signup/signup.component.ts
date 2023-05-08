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

  ngOnInit(): void {
    this.signup;
    this.signupForm();
  }
}
