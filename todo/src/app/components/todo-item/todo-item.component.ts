import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todoItem: Todo = {
    id:0,
    title: '',
    completed: false
  };
  constructor() { }

  ngOnInit(): void {
  }

  @Output() onCheckboxToggle: EventEmitter<Todo> = new EventEmitter();
  @Output() onButtonDelete: EventEmitter<Todo> = new EventEmitter();

onToggle(todo: Todo): void {
    this.todoItem = todo;
    this.todoItem.completed = !this.todoItem.completed;
    this.onCheckboxToggle.emit(this.todoItem);
  }

  onDelete(todo: Todo) {
    this.todoItem = todo;
    this.onButtonDelete.emit(this.todoItem);

  }

  setClasses() {
    const classes = {
      todoItem: true,
      'is-completed': this.todoItem.completed
    }
    return classes;
  }
  
}

