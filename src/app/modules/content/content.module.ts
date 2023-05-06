import { ContentComponent } from './content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContentRoutingModule } from './content-routing.module';
import { LoginModule } from '../authentication/partials/login/login.module';
import { SignupModule } from '../authentication/partials/signup/signup.module';

@NgModule({
  declarations: [ContentComponent, HomeComponent],
  imports: [CommonModule, ContentRoutingModule, LoginModule, SignupModule],
})
export class ContentModule {}
