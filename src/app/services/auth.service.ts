import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as IUsers from './user.interface';

import firebase from 'firebase';
import { AlertController } from '@ionic/angular';
import {
  AngularFireStorage
} from '@angular/fire/storage';
import {  AngularFireUploadTask } from
 '@angular/fire/storage';
import { switchMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
  

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebase: any;

  constructor(private afAuth: AngularFireAuth,
     private afs: AngularFirestore,
     private alertController: AlertController,
     private storage: AngularFireStorage
     ) { }

     uploadAvatar(base64String) {
      const filePath = `${this.getUserId()}/avatar`;
      const fileRef = this.storage.ref(filePath);
      const task: AngularFireUploadTask = fileRef.putString(
      base64String,
      'base64',
      { contentType: 'image/png' }
      );
      return from(task).pipe(
      switchMap(result => {
      // Upload Task finished, get URL to the image
      return fileRef.getDownloadURL();
      }),
      switchMap(photoURL => {
      // Set the URL to the user document
      const uploadPromise = this.afs
      .doc(`users/${this.getUserId()}`)
      .set({ photoURL }, { merge: true });
      return from(uploadPromise);
      })
      )
      }
      





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

getUserId() {
  return  firebase.auth().currentUser.uid;
  }
  getUserData() {
  return this.afs.doc<IUsers.User>(`users/${this.getUserId()}`).valueChanges();
  }
}


  

