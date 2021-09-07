import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class AuthService {


  // private userSubject: BehaviorSubject<User>;
   user;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;

    
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then((value:any)  => {
        console.log('Success!', value);
      })
      .catch((err:any) => {
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then((value:any) => {
        console.log('Nice, it worked!');
      })
      .catch((err:any) => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  get isLoggedIn() {
    const user =null
    //  JSON.parse(sessionStorage.getItem('user'));

    return user !== null;
  }

}