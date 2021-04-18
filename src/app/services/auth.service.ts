import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as IUsers from './user.interface';

import firebase from 'firebase';

import {
  AngularFireStorage
} from '@angular/fire/storage';
  

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) { }

  // Start the Firebase register process
async emailSignup({email, password, fullname}, userType: string): Promise<any> {
  const credential = await this.afAuth.createUserWithEmailAndPassword(
  email,
  password
  );
  return this.updateUserData(credential.user, fullname, null, userType);
  }
  // Sets user data to firestore on login
  private updateUserData(user: IUsers.User, name = null, image = null, userType: string):
   Promise<any> {
  const userRef: AngularFirestoreDocument<IUsers.User> = this.afs.doc(
  `users/${user.uid}`
  );
  
  const data = {
  uid: user.uid,
  email: user.email,
  displayName: name,
  photoURL: image,
  userType: userType,
};
return userRef.set(data, { merge: true });
}

signIn({email, password}) {
  return this.afAuth.signInWithEmailAndPassword(email, password);
}

resetPw(email) {
  return this.afAuth.sendPasswordResetEmail(email);
}

//getUserId() {
//    return firebase.auth().currentUser.uid;
//}
//
//getUserData() {
//    return this.afs.doc<IUsers.User>(`users/${this.getUserId()}`).valueChanges();
//}

}


  

