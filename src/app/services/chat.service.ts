import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as IUsers from './user.interface';

 



 
export interface Message {
  createdAt:firebase.default.firestore.FieldValue;
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}
 
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  currentUser: IUsers.User = null;
 
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;      
    });
  }
 
  
 
 
 
  addChatMessage(msg) {
    return this.afs.collection('messages').add({
      msg: msg,
      from: this.currentUser.uid,
      createdAt: firebase.default.firestore.FieldValue.serverTimestamp()
     
    });
  }
   
  getChatMessages() {
    let users = [];
    return this.getUsers().pipe(
      switchMap(res => {
        users = res;
        return this.afs.collection('messages', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id' }) as unknown as Observable<Message[]>;
      }),
      map(messages => {
        // Get the real name for each user
        for (let m of messages) {          
          m.fromName = this.getUserForMsg(m.from, users);
          m.myMsg = this.currentUser.uid === m.from;
        }        
        return messages
      })
    )
  }
   
  private getUsers() {
    return this.afs.collection('users').valueChanges({ idField: 'id' }) as unknown as Observable<IUsers.User[]>;
  }
   
  private getUserForMsg(msgFromId, users: IUsers.User[]): string {    
    for (let usr of users) {
      if (usr.uid == msgFromId) {
        return usr.email;
      }
    }
    return 'Deleted';
  }
}