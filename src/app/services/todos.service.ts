import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Todo } from '../models/Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5'

  constructor(private http:HttpClient) { }
  //Getting Todos
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`); 
    
  }

  //Deleting Todos
  deleteTodo(todos: Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todos.id}`;
    return this.http.delete<Todo>(url, httpOptions)

  }

  //Adding Todos
  addTodo(todos: Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todos, httpOptions);

  }

  //Toggle Completed
  toggleCompleted(todos: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todos.id}`;
    return this.http.put(url, todos, httpOptions);
  
  }

}
