import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit {
  personalForm: FormGroup;
  submitted: boolean = false;
  show: boolean = false;
  userSubmitted: boolean = false;
  section = 1;

  @Output() next = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  buildPersonalForm(): void {
    this.personalForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      number: ['', [Validators.required]],
    });
  }

  get formControl(): any {
    return this.personalForm.controls;
  }

  nextSection() {
    this.submitted = true;
    // if (this.personalForm.invalid) return;

    // Track data
    this.next.emit(this.personalForm);
  }

  ngOnInit(): void {
    this.buildPersonalForm();
    // this.personalForm.patchValue({
    //   firstName: 'pioerpuiewopriewp',
    //   lastName: 'oiuioeferwnfkrn',
    // });
  }

  onSubmit() {}
}
