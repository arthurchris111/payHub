import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { catchError, from, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: Auth) {}

  public login(email: any, password: any) {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      catchError((err: any) => throwError(() => err))
    );
  }

  public signup(
    firstName: string,
    lastName: string,
    email: any,
    password: any
  ) {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(catchError((err: any) => throwError(() => err)));
  }

  // public logout(): Observable<any> {
  //   return from(this.auth.signOut()).pipe(
  //     catchError((err: any) =>
  //       throwError(() => {
  //         console.log(err);
  //       })
  //     )
  //   );
  // }
}
