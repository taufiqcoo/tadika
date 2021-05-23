import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SenaraimuridguruPageRoutingModule } from '../pages/senaraimuridguru/senaraimuridguru-routing.module';
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

export interface Todo {
  name: string;
  age: '';
  parents: string;
  address: string;
  createdAt: number; 
}





@Injectable({
  providedIn: 'root'
})
export class TodoService {private todosCollection: AngularFirestoreCollection<Todo>;
   

  private todos: Observable<Todo[]>;

  constructor(db: AngularFirestore) {
    this.todosCollection = db.collection<Todo>('todos');
 
    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getTodos() {
    return this.todos;
  }
 
  getTodo(id) {
    return this.todosCollection.doc<Todo>(id).valueChanges();
  }
 
  updateTodo(todo: Todo, id: string) {
    return this.todosCollection.doc(id).update(todo);
  }
 
  addTodo(todo: Todo) {
    return this.todosCollection.add(todo);
  }
 
  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }
  

   }

  function getTodo() {
    throw new Error('Function not implemented.');
  }

