import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'pay-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss'],
})
export class CreateCardFormComponent implements OnInit {
  cardForm!: FormGroup;
  submitted: boolean = false;
  isFetching: boolean = false;
  image: any;
  cardName: any;
  email = '';
  password = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private auth: AngularFireAuth,
    private authService: AuthenticationService
  ) {}

  buildCardForm(): void {
    this.cardForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required]],
      date: ['', [Validators.required]],
      idNumber: ['', [Validators.required]],
      cardType: ['', [Validators.required]],
      uploadCard: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.buildCardForm();
  }

  get formControl(): any {
    return this.cardForm.controls;
  }

  // id type array
  Cards: any = ['Voters ID', 'Ghana card'];

  // change card type
  changeCard(e: any) {
    this.cardName?.setValue(e.target.value, {});
  }

  // upload id image
  onFileChanged(event: any) {
    this.image = event.target.files[0];
  }

  onSubmit() {
    this.submitted = true;
    this.isFetching = true;

    if (this.cardForm.invalid) {
      return;
    }

    const { firstName, lastName, email, password } = this.cardForm.value;

    this.authService.signup(firstName, lastName, email, password).subscribe({
      next: (res: any) => {
        this.route.navigate(['/login']);
      },
    });
    console.log(this.cardForm.value);
  }
}
