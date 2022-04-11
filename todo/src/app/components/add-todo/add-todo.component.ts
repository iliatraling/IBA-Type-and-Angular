import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
//import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string = '';

  @Output() onAdd: EventEmitter<Todo> = new EventEmitter();
  //title: string = '';
  todoAdd: Todo = {
    id:0,
    title: '',
    completed: false
  };
  constructor() { }
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.title);
    this.todoAdd.title = this.title;
    this.onAdd.emit(this.todoAdd);
    console.log("submit");
  }

  // может добавить тудуитем

}
