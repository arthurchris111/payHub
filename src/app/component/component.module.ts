import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [InputComponent, ButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [InputComponent],
})
export class ComponentModule {}
