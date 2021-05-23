import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AddNewTaskPage } from './add-new-task/add-new-task.page';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
})
export class ToDoListPage {

  todoList = []


    today : number = Date.now();

    constructor(public ModalCtrl:ModalController){}
  
     async addTask(){
       const modal = await this.ModalCtrl.create({
        component: AddNewTaskPage
       })

       modal.onDidDismiss().then(newTaskObj =>{
         console.log(newTaskObj.data);
         this.todoList.push(newTaskObj.data)
       })

       return await modal.present()

      }
       delete(index){
        this.todoList.splice(index,1)
       }


      }



