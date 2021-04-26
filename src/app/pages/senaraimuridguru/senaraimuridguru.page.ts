import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from './../../services/todo.service';

@Component({
  selector: 'app-senaraimuridguru',
  templateUrl: './senaraimuridguru.page.html',
  styleUrls: ['./senaraimuridguru.page.scss'],
})
export class SenaraimuridguruPage implements OnInit {

  todos: Todo[];
  constructor(private todoService: TodoService) { }

  
  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }
  remove(item) {
    this.todoService.removeTodo(item.id);
  }
}
