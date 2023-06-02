import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pay-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() type = '';
  @Input() control = new FormControl();
  // @Input() label = '';

  constructor() {}

  ngOnInit(): void {}
}
