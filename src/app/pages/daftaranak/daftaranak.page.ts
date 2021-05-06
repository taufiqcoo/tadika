import { Component, OnInit } from '@angular/core';
import { ToastController} from '@ionic/angular';
import { Todo, TodoService } from './../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';




@Component({
  selector: 'app-daftaranak',
  templateUrl: './daftaranak.page.html',
  styleUrls: ['./daftaranak.page.scss'],
})
export class DaftaranakPage implements OnInit {

  todo: Todo = {
    name: '',
    createdAt: new Date().getTime(),
    age: '',
    parents:'',
    address:'',
    
  };

  todoId = null;

  constructor(public toastController: ToastController,private route: ActivatedRoute, private nav: NavController, private todoService: TodoService, private loadingController: LoadingController) { }

  async openToast() {
    const toats = await this.toastController.create({
      message: 'Registered please go to the List tab',
      duration: 2000
    });
    toats.present();
  } 

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId)  {
      this.loadTodo();
  }
}
async loadTodo() {
  const loading = await this.loadingController.create({
    message: 'Loading Todo..'
  });
  await loading.present();

  this.todoService.getTodo(this.todoId).subscribe(res => {
    loading.dismiss();
    this.todo = res;
  });
}

async saveTodo() {

  const loading = await this.loadingController.create({
    message: 'Saving please wait'
  });
  await loading.present();

  if (this.todoId) {
    this.todoService.updateTodo(this.todo, this.todoId).then(() => {
      loading.dismiss();
      this.nav.navigateBack('senaraianak');
    });
  } else {
    this.todoService.addTodo(this.todo).then(() => {
      loading.dismiss();
      this.nav.navigateBack('senaraianak');
    });
  }
}

  

}

