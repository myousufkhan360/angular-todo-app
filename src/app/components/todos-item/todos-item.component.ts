import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodosService } from '../../services/todos.service'
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {
  @Input() todos:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodosService) { }

  ngOnInit() {
  }

  //Setting Dynamic Classes

  setClasses() {
    let classes = {
      todos: true,
      'is-complete':this.todos.completed
    }
    return classes;
  }

  onToggle(todos) {
    //Toggle in UI
    todos.completed = !todos.completed
    //Toggle on Server
    this.todoService.toggleCompleted(todos).subscribe(todo => console.log(todos));
  }

  
  onDelete(todos) {
    this.deleteTodo.emit(todos);
  }

}
