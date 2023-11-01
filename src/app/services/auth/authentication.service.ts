import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Observable, catchError, from, throwError } from 'rxjs';

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

  public logout(): Observable<any> {
    return from(this.auth.signOut()).pipe(
      catchError((err: any) =>
        throwError(() => {
          console.log(err);
        })
      )
    );
  }
}
