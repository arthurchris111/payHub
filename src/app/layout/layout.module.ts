import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [FooterComponent, HeaderComponent, LayoutComponent],
})
export class LayoutModule {}
