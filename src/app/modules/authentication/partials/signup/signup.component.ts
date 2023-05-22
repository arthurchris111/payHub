import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  section = 1;
  identityCard: any;
  formBuilder: any;
  ngOnInit(): void {}

  // public nextSection(): void {
  //   if (this.section < 4) {
  //     this.section = this.section + 1;
  //   }
  // }
  // public prevSection(): void {
  //   if (this.section > 1) {
  //     this.section = this.section - 1;
  //   }
  // }

  // cardForm(): void {
  //   this.identityCard = this.formBuilder.group({
  //     card: ['', [Validators.required]],
  //     idNumber: ['', [Validators.required]],
  //   });
  // }

  submit(): void {}

  constructor() {}
}
