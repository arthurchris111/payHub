import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, RouterModule],
  exports: [InputComponent],
})
export class ComponentModule {}
