import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit {
  signup!: FormGroup;
  submitted: boolean = false;
  show: boolean = false;
  user: any = {};
  // userSubmitted: boolean = false;SSS
  section = 1;

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  signupForm(): void {
    this.signup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      number: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.signup;
    this.signupForm();
  }

  get personal() {
    return this.signup.invalid;
  }

  public nextSection(): void {
    this.submitted = true;
    if (this.signup.invalid) {
      return;
    } else if (this.section < 4) {
      this.section = this.section + 1;
    }
    console.log(this.signup.value);
  }

  onSubmit() {
    // this.submitted = true;
    // this.userSubmitted = true;
    // if (this.signup.invalid) {
    //   return;
    // }
    // else {
    //   this.route.navigate(['address']);
    // }
  
  }
}
