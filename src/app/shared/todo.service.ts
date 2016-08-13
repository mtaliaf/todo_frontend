import { Injectable } from '@angular/core';
import { Todo } from './todo.model'

@Injectable()
export class TodoService {

  constructor() { }
  getTodos(): Promise<Todo[]> {
    return Promise.resolve(TODOS);
  }
}

const TODOS: Todo[] = [
  { metadata: { id: 'message1', user_id: 'user1', timestamp: 1470541766}, body: 'todo1'}
]
