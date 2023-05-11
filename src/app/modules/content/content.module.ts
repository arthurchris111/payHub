import { ContentComponent } from './content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContentRoutingModule } from './content-routing.module';
import { LoginModule } from '../authentication/partials/login/login.module';
import { PersonalInformationModule } from '../authentication/partials/signup/partials/personal-information/personal-information.module';

@NgModule({
  declarations: [ContentComponent, HomeComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    LoginModule,
    PersonalInformationModule,
  ],
})
export class ContentModule {}
