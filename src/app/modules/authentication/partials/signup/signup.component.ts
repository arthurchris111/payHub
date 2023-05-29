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

  submitted: boolean = false;
  personal: any;

  constructor(private FormBuilder: FormBuilder) {}

  ngOnInit(): void {}

  receiveMessage($event: any) {
    this.personal = $event;
  }

  get personalData() {
    return this.personal.invalid;
  }

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
