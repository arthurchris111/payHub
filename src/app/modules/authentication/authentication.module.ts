import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { SignupComponent } from './partials/signup/signup.component';
import { AddressInformationComponent } from './partials/signup/partials/address-information/address-information.component';
import { IdentityCardInformationComponent } from './partials/signup/partials/identity-card-information/identity-card-information.component';
import { PersonalInformationComponent } from './partials/signup/partials/personal-information/personal-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from 'src/app/component/component.module';
import { LayoutModule } from 'src/app/layout/layout.module';
// import { LoginComponent } from './partials/login/login.component';

const component = [
  // LoginComponent,
  SignupComponent,
  PersonalInformationComponent,
  IdentityCardInformationComponent,
  AddressInformationComponent,
  AuthenticationComponent,
];
@NgModule({
  declarations: [...component],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    LayoutModule,
  ],
})
export class AuthenticationModule {}
