import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Todo1Service } from './../../services/todo1.service';
import { AddtodoPage } from '../addtodo/addtodo.page';
import { UpdatetodoPage} from '../updatetodo/updatetodo.page';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page  {
  todoList = []
  
  today: number = Date.now();


  constructor(public modalCtlr: ModalController, public todo1Service:Todo1Service) { }
   
 
}
