import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CreateCardFormComponent } from './create-card-form/create-card-form.component';

const components = [
  HomeComponent,
  FaqComponent,
  LoginComponent,
  CreateCardFormComponent,
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
