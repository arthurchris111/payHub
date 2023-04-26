import { ContentComponent } from './content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    ContentComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [CommonModule],
})
export class ContentModule {}
