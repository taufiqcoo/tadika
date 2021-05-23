import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import * as IUsers from './user.interface';
import { AuthService } from './auth.service';
import * as firebase from 'firebase';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private usersCollection: AngularFirestoreCollection<IUsers.User>;
  private users: Observable<IUsers.User[]>;
  firebase: any;

  constructor(private afs: AngularFirestore,  private authService: AuthService ) { 
    this.usersCollection = afs.collection<IUsers.User>('users');
 
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getUsers() {
    return this.users;
  }
 
  getUser(id) {
    return this.usersCollection.doc<IUsers.User>(id).valueChanges();
  }
 
  updateTodo(user: IUsers.User, id: string) {
    return this.usersCollection.doc(id).update(user);
  }
 
  addUser(user: IUsers.User) {
    return this.usersCollection.add(user);
  }
 
  removeUser(id) {
    return this.usersCollection.doc(id).delete();
  }

    
}
