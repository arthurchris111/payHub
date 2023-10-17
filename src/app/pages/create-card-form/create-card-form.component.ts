import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'pay-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss'],
})
export class CreateCardFormComponent implements OnInit {
  signup!: FormGroup;
  show: boolean = false;
  submitted: boolean = false;
  isFetching: boolean = false;

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  buildLoginForm(): void {
    this.signup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  onSubmit() {
    this.submitted = true;
    this.isFetching = true;
  }
}
