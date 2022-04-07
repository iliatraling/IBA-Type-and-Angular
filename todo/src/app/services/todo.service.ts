import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application-json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = 'api/todos';
  
  constructor(private http: HttpClient) { }
 // getTodos(): Todo[] {
 //   return this.todos;
//}
getTodos(): Observable<Todo[]> {
  return this.http.get<Todo[]>(
    `${this.todosUrl}`
  );
}

deleteTodo(id: number) {
  //this.http.delete(
  //  `${this.todosUrl + "/" + todo}`
  //);
  return this.http.delete(this.todosUrl +'/' + id);
}

}
