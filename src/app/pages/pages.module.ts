import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FaqComponent } from './faq/faq.component';
import { CreateCardFormComponent } from './create-card-form/create-card-form.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  HomeComponent,
  FaqComponent,
  CreateCardFormComponent,
  LoginComponent,
];
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
