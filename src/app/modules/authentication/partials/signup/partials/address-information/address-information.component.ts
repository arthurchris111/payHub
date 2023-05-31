import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-information',
  templateUrl: './address-information.component.html',
  styleUrls: ['./address-information.component.scss'],
})
export class AddressInformationComponent implements OnInit {
  addressForm: FormGroup;
  submitted: boolean = false;
  show: boolean = false;
  // user: any = {};
  // userSubmitted: boolean = false;
  // isSubmitted: boolean = false;
  regionName: any;
  @Output() next = new EventEmitter();
  @Output() prev = new EventEmitter();
  section = 2;

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  Regions: any = [
    'Northern',
    'Ashanti',
    'Western',
    'Volta',
    'Eastern',
    'Upper West',
    'Central',
    'Upper East',
    'Greater Accra',
    'Savannah',
    'North East',
    'Bono East',
    'Oti',
    'Ahafo',
    'Bono',
    'Western North',
  ];

  buildAddressForm(): void {
    this.addressForm = this.formBuilder.group({
      region: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required, Validators.required]],
      regionName: ['', [Validators.required]],
    });
  }

  changeRegion(e: any) {
    this.regionName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  ngOnInit(): void {
    // this.address;
    this.buildAddressForm();
  }

  get formControl(): any {
    return this.addressForm.controls;
  }

  prevSection(): void {
    this.prev.emit();
  }

  nextSection() {
    debugger;
    this.submitted = true;
    if (this.addressForm.invalid) return;

    this.next.emit(this.addressForm);
  }

  onSubmit() {}
}
