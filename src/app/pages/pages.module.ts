import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FaqComponent } from './faq/faq.component';
import { CreateCardFormComponent } from './create-card-form/create-card-form.component';

const components = [HomeComponent, FaqComponent, CreateCardFormComponent];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, PagesRoutingModule, LayoutModule],
})
export class PagesModule {}
