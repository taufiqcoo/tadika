import { Component, OnInit } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { ModalController } from '@ionic/angular';
import { Todo1Service } from './../../services/todo1.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.page.html',
  styleUrls: ['./addtodo.page.scss'],
})
export class AddtodoPage implements OnInit {

  categories =[]
  categorySelectedCategory

  newTaskObj = {}
  itemName
  itemName1
  itemDueDate 
  itemPriority
  itemCategory

  constructor(public modalCtlr: ModalController, public todo1Service:Todo1Service) { }

  ngOnInit() {
    this.categories.push('Paid')
    this.categories.push('Late 1 Month')
    this.categories.push('Late 2 Month')
    
  }

  async add(){
    this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory})
    console.log(this.newTaskObj);
    let uid = this.itemName + this.itemDueDate
    
    if(uid){
      await this.todo1Service.addTask(uid,this.newTaskObj)
    }else{
      console.log("can't save empty task");
    }


    this.dismis()
  }
  
  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtlr.dismiss(this.newTaskObj)
  }

}
