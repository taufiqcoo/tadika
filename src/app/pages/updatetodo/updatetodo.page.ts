import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Todo1Service } from './../../services/todo1.service';

@Component({
  selector: 'app-updatetodo',
  templateUrl: './updatetodo.page.html',
  styleUrls: ['./updatetodo.page.scss'],
})
export class UpdatetodoPage implements OnInit {
  @Input() task;
  categories =[]
  categorySelectedCategory

  newTaskObj = {}
  itemName
  itemDueDate 
  itemPriority
  itemCategory

  constructor(public modalCtlr:ModalController, public todo1Servive:Todo1Service) { }

  ngOnInit() {
    this.categories.push('Paid')
    this.categories.push('Late 1 Month')
    this.categories.push('Late 2 Month')
    

    this.itemName = this.task.value.itemName
    this.itemDueDate = this.task.value.itemDueDate
    this.itemPriority = this.task.value.itemPriority
    this.categorySelectedCategory = this.task.value.itemCategory
    // console.log(this.task);
  }
  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtlr.dismiss()
  }

  async update(){
    this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory})
    let uid = this.task.key
    await this.todo1Servive.updateTask(uid,this.newTaskObj)
    this.dismis()
  }

}
