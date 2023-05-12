import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  section = 1;
  ngOnInit(): void {}

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

  constructor() {}
}
