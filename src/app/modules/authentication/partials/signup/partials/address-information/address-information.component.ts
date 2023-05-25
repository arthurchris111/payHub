import { Component, Input, OnInit } from '@angular/core';
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
  section = 1;
  // @Input() formGroupName!: string;
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

  addressForm(): void {
    this.address = this.formBuilder.group({
      region: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required, Validators.minLength(10)]],
      regionName: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.address;
    this.addressForm();
    // this.address = this.rootFormGroup.control.get(
    //   this.formGroupName
    // ) as FormGroup;
  }

  changeRegion(e: any) {
    this.regionName?.setValue(e.target.value, {
      // onlySelf: true,
    });
  }

  public nextSection(): void {
    this.submitted = true;
    if (this.address.invalid) {
      return;
    } else if (this.section < 4) {
      this.section = this.section + 1;
    }
    console.log(this.address.value);
  }

  public prevSection(): void {
    this.submitted = true;
    if (this.address.invalid) {
      return;
    } else if (this.section > 1) {
      this.section = this.section - 1;
    }
  }

  // public prevSection(): void {
  //   if (this.section > 1) {
  //     this.section = this.section - 1;
  //   }
  // }

  // access form controls
  // regionNames() {
  //   return this.address.get('regionName');
  // }

  onSubmit() {
    // this.submitted = true;
    // this.userSubmitted = true;
    // this.isSubmitted = true;
    // if (this.address.invalid) {
    //   return;
    // }
  }
}
