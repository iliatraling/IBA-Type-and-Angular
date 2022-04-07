import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  status = "not";
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {// запускается вначале при инициализации
    this.todoService.getTodos().subscribe(todos => {//возвращает тудус в наш тудудудус
    this.todos = todos;
  });
}
onChahgeComplited(todo: Todo) {
  console.log("It work");
  console.log(todo);
}
onDeleteComplited(todo: Todo) {
  let index = this.todos.indexOf(todo);
  console.log(index)
  console.log(todo.id);
  this.todoService.deleteTodo(index).subscribe(() => this.status = "delete succsesfull");
  console.log(this.status);
  if(this.status == "delete succsesfull" ) {
    this.todos.splice(index, 1);// (индекс, сколько удалить, что вставить)
    this.status ="not";
  }
  //this.todos.splice(index, 1);// (индекс, сколько удалить, что вставить)
  //.subscribe(response => {this.todos = this.todos.filter(item => {item.id !== todo.id});});
 
}


}
