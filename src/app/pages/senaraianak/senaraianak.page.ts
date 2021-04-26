import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from './../../services/todo.service';

@Component({
  selector: 'app-senaraianak',
  templateUrl: './senaraianak.page.html',
  styleUrls: ['./senaraianak.page.scss'],
})
export class SenaraianakPage implements OnInit {

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
