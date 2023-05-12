import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // ReadMore: boolean = false;

  //hiding info box
  // visible: boolean = true;

  //onclick toggling both
  // onclick() {
  //   this.ReadMore = !this.ReadMore; //not equal to condition
  //   this.visible = !this.visible;
  // }
}
