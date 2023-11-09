import { AngularFireStorage } from '@angular/fire/compat/storage';
import { UsersService } from './../../services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { FileUpload } from 'src/app/models/file-upload';
import { ProfileUser } from 'src/app/models/user';
import { switchMap } from 'rxjs';
// import { ImageUploadService } from 'src/app/services/image-upload/image-upload.service';

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
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;

  user: ProfileUser = {
    uid: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  // userData: ProfileUser = {
  //   uid: '',
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  //   date: '',
  //   idNumber: '',
  //   cardType: '',
  //   uploadCard: '',
  // };

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private authService: AuthenticationService,
    private usersService: UsersService // private uploadService: ImageUploadService
  ) {
    this.usersService.get().subscribe((res: any) => console.log(res));
  }

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

  // select id type
  Cards: any = ['Voters ID', 'Ghana card'];

  // change id card type
  changeCard(e: any) {
    this.cardName?.setValue(e.target.value, {});
  }

  // upload id image to fireStorage
  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  // upload(): void {
  //   if (this.selectedFiles) {
  //     const file: File | null = this.selectedFiles.item(0);
  //     this.selectedFiles = undefined;

  //     if (file) {
  //       this.currentFileUpload = new FileUpload(file);
  //       this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
  //         // (percentage) => {
  //         //   this.percentage = Math.round(percentage ? percentage : 0);
  //         // },
  //         (error) => {
  //           console.log(error);
  //         }
  //       );
  //     }
  //   }
  // }

  onSubmit() {
    this.submitted = true;
    this.isFetching = true;
    const { firstName, lastName, email, password } = this.cardForm.value;

    // if (this.cardForm.invalid) {
    //   return;
    // }

    this.usersService.create({ firstName, lastName });
    // TODO
    //  Send data to bitnob to create card
    // this.usersService.userDataToBitnob(this.cardForm.value).subscribe(() => {
    //   console.log('data sent successfully'),
    //     (error: Error) => {
    //       console.error('Error sending data:', error);
    //     };
    // });

    // this.authService
    //   .signup(email, password)
    //   .pipe(
    //     switchMap(({ user: { uid } }) =>
    //       this.usersService.addUser({
    //         uid,
    //         email,
    //         password,
    //         firstName,
    //         lastName,
    //       })
    //     )
    //   )
    //   .subscribe(() => {
    //     this.route.navigate(['/home']);
    //   });
  }

  // Send firstname lastname,email,password to firebase
  //   this.usersService.addUser(this.user).subscribe(() => {
  //     console.log('user added'),
  //       (error: Error) => {
  //         console.error('Error adding user:', error);
  //       };
  //   });

  //   // signing up with email and password
  //   this.authService.signup(email, password).subscribe({
  //     next: (res: any) => {
  //       this.route.navigate(['/login']);
  //     },
  //   });
  //   console.log(this.cardForm.value);
  // }
}
