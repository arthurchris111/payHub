import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [HomeComponent, FaqComponent],
  imports: [CommonModule, PagesRoutingModule, LayoutModule],
})
export class PagesModule {}
