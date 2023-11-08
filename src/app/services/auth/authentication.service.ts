import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import {
  User,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
} from '@angular/fire/auth';
import { Observable, catchError, from, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // currentUser = authState(this.auth);

  constructor(private auth: Auth) {}

  public login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      catchError((err: any) => throwError(() => err))
    );
  }

  public signup(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(catchError((err: any) => throwError(() => err)));
  }

  public logout(): Observable<any> {
    return from(this.auth.signOut());
  }
}
