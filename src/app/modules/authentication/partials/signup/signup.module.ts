import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressInformationComponent } from './partials/address-information/address-information.component';
import { IdentityCardInformationComponent } from './partials/identity-card-information/identity-card-information.component';

@NgModule({
  declarations: [
    SignupComponent,
    AddressInformationComponent,
    IdentityCardInformationComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [SignupComponent],
})
export class SignupModule {}
