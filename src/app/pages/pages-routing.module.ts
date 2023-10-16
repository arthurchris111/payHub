import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from '../layout/layout.component';
import { FaqComponent } from './faq/faq.component';
import { CreateCardFormComponent } from './create-card-form/create-card-form.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'create-card', component: CreateCardFormComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
