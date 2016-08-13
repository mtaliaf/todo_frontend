import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MdToolbar } from '@angular2-material/toolbar';
import { Todo, TodoService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES, MdIcon, MdToolbar],
  providers: [MdIconRegistry, TodoService]
})
export class AppComponent implements OnInit {
  constructor(private todoService: TodoService) { }
  title = 'app works!';
  todos: Todo[];
  ngOnInit() {
    this.getTodos();
  }
  getTodos() {
    this.todoService.getTodos().then(todos => this.todos = todos);
  }
}
