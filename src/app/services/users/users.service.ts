import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import {
  Firestore,
  collection,
  deleteDoc,
  doc,
  docData,
  getDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { AuthenticationService } from '../auth/authentication.service';
import { Observable, from, of, switchMap } from 'rxjs';
import { ProfileUser } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // bitnob API URL
  profileUserRef: AngularFirestoreCollection<ProfileUser>;
  private dbPath = 'Users';

  private apiUrl = '';

  constructor(
    private firestore: Firestore,
    private authServices: AuthenticationService,
    private http: HttpClient,
    private db: AngularFirestore
  ) {
    this.profileUserRef = db.collection(this.dbPath);
  }

  // get currentUserProfile(): Observable<ProfileUser | null> {
  //   return this.authServices.currentUser.pipe(
  //     switchMap((user) => {
  //       if (!user?.uid) {
  //         return of(null);
  //       }
  //       const ref = doc(this.firestore, 'users', user?.uid);
  //       return docData(ref) as Observable<ProfileUser>;
  //     })
  //   );
  // }
  // userDataToBitnob(user: ProfileUser): Observable<any> {
  //   return this.http.post(this.apiUrl, user);
  // }

  // addUser(user: ProfileUser): Observable<void> {
  //   const ref = doc(this.firestore, 'users', user.uid);
  //   return from(setDoc(ref, user));
  // }

  // updateUser(user: ProfileUser): Observable<void> {
  //   const ref = doc(this.firestore, 'users', user.uid);
  //   return from(updateDoc(ref, { ...user }));
  // }

  get(): any {
    return this.db.collection(this.dbPath).snapshotChanges();
  }

  create(user: ProfileUser): any {
    console.log(user);
    return this.db.collection(this.dbPath).add({ ...user });
  }

  update(id: string, data: any): Promise<void> {
    return this.profileUserRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.profileUserRef.doc(id).delete();
  }
}
