import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

import { Output } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit {
  personal!: FormGroup;
  submitted: boolean = false;
  show: boolean = false;

  userSubmitted: boolean = false;
  section = 1;
  // @Input() personalForm: any;

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }

  personalForm(): void {
    this.personal = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      number: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.personal;
    this.personalForm();
  }

  get personalDetails() {
    return this.personal.invalid;
  }

  public nextSection(): void {
    this.submitted = true;
    if (this.personal.invalid) {
      return;
    } else if (this.section < 4) {
      this.section = this.section + 1;
    }
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
    // console.log(this.personal);
  }
}
