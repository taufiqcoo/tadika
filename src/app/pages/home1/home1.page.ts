import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Todo1Service } from './../../services/todo1.service';
import { AddtodoPage } from '../addtodo/addtodo.page';
import { UpdatetodoPage} from '../updatetodo/updatetodo.page';



@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page  {
  todoList = []
  
  today: number = Date.now();


  constructor(public modalCtlr: ModalController, public todo1Service:Todo1Service) {
    this.getAllTask()
   }
   
   async addNewItem() {
    const modal = await this.modalCtlr.create({
      component: AddtodoPage,
    })
    modal.onDidDismiss().then(newTask =>{
      this.getAllTask()
    })
    return await modal.present()
  }

  getAllTask(){
    this.todoList = this.todo1Service.getAllTasks()
    console.log(this.todo1Service.getAllTasks());
  }

  delete(key) { 
    this.todo1Service.deleteTask(key)
    this.getAllTask()
  }

  async update(selectedTask){
    const modal = await this.modalCtlr.create({
      component: UpdatetodoPage,
      componentProps: {task: selectedTask}
    })

    modal.onDidDismiss().then(()=>{
      this.getAllTask()
    })
    
    return await modal.present()
  }
}
