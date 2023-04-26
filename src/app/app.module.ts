import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { CoreComponent } from './core/core.component';
import { LayoutComponent } from './layout/layout.component';
import { ModulesComponent } from './modules/modules.component';
import { LoginComponent } from './modules/authentication/partials/login/login.component';
import { SignupComponent } from './modules/authentication/partials/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    CoreComponent,
    LayoutComponent,
    ModulesComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
