import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-information',
  templateUrl: './address-information.component.html',
  styleUrls: ['./address-information.component.scss'],
})
export class AddressInformationComponent implements OnInit {
  address!: FormGroup;
  submitted: boolean = false;
  show: boolean = false;
  user: any = {};
  userSubmitted: boolean = false;
  isSubmitted: boolean = false;
  regionName: any;
  @Output() next = new EventEmitter();
  @Output() prev = new EventEmitter();
  // section = 1;
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
    this.address = this.formBuilder.group({
      region: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required, Validators.minLength(10)]],
      regionName: ['', [Validators.required]],
    });
  }

  changeRegion(e: any) {
    this.regionName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  ngOnInit(): void {
    this.address;
    this.buildAddressForm();
  }

  prevSection(): void {
    this.prev.emit();
  }

  nextSection() {
    this.submitted = true;
    if (this.address.invalid) return;
    // Track data
    this.next.emit(this.buildAddressForm);
  }

  onSubmit() {}
}
