import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit {
  personal: FormGroup;
  submitted: boolean = false;
  show: boolean = false;
  userSubmitted: boolean = false;
  section = 1;

  @Output() data = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  personalForm(): void {
    this.personal = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      number: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  nextSection() {
    this.data.emit(this.personal);
    console.log(this.data);
  }

  ngOnInit(): void {
    this.personal;
    this.personalForm();
  }

  onSubmit() {}
}
