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
  dataOnButtonClick: string;
  submitted: boolean = false;

  constructor(private FormBuilder: FormBuilder) {}

  ngOnInit(): void {}

  receivedDataHandler(p: any) {
    this.dataOnButtonClick = p;
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
