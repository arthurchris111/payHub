import { Component, OnInit, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  submitted: boolean = false;
  private auth: Auth = inject(Auth);

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) {}

  buildLoginForm(): void {
    this.login = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  get formControl(): any {
    return this.login.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.login.value.invalid) {
      return;
    }

    const { email, password } = this.login.value;
    // debugger
    this.authService.login(email, password).subscribe({
      next: (res: any) => {
        // console.log(res);
        this.route.navigate(['/home']);
      },
      error: (error: any) => {
        // console.log(error);
        this.toastr.error(error, 'Login');
      },
    });
    console.log(this.login.value);
  }
}
