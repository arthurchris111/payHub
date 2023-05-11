import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInformationComponent } from './personal-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersonalInformationComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [PersonalInformationComponent],
})
export class PersonalInformationModule {}
