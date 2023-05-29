import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-identity-card-information',
  templateUrl: './identity-card-information.component.html',
  styleUrls: ['./identity-card-information.component.scss'],
})
export class IdentityCardInformationComponent implements OnInit {
  identityCard!: FormGroup;
  submitted: boolean = false;
  show: boolean = false;
  user: any = {};
  userSubmitted: boolean = false;
  isSubmitted: boolean = false;
  cardName: any;
  // @Input() formGroupName!: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router // private rootFormGroup: FormGroupDirective
  ) {}

  Cards: any = ['Voters ID', 'Ghana card'];

  cardForm(): void {
    this.identityCard = this.formBuilder.group({
      card: ['', [Validators.required]],
      idNumber: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.identityCard;
    this.cardForm();
    // this.identityCard = this.rootFormGroup.control.get(
    //   this.formGroupName
    // ) as FormGroup;
  }

  changeCard(e: any) {
    this.cardName?.setValue(e.target.value, {});
  }

  onSubmit() {
    // this.submitted = true;
    // this.userSubmitted = true;
    // this.isSubmitted = true;
    // if (this.identityCard.invalid) {
    //   return;
    // }
  }
}
