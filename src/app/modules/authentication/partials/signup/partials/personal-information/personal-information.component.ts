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
  userSubmitted: boolean = false;

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
  // ReadMore: boolean = false;
  // visible: boolean = true;

  // onclick() {
  //   this.ReadMore = !this.ReadMore; //not equal to condition
  //   this.visible = !this.visible;
  // }

  onSubmit() {
    this.submitted = true;
    this.userSubmitted = true;

    if (this.signup.invalid) {
      return;
    }
    // else {
    //   this.route.navigate(['address']);
    // }
  }
}
