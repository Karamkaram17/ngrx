import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  createTodo,
  deleteTodo,
  loadAllTodos,
} from 'src/app/state/todos/todo.actions';
import { selectAllTodos } from 'src/app/state/todos/todo.selectors';

import { AppState } from 'src/app/state/app.state';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'todos-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(loadAllTodos());
  }

  formGroup = new FormGroup({
    description: new FormControl('', [Validators.required]),
  });

  allTodos$ = this.store.select(selectAllTodos);

  addTodo() {
    this.store.dispatch(
      createTodo({
        todo: {
          description: this.formGroup.controls.description.value!,
          checked: false,
          id: Date.now().toString(),
        },
      })
    );
    this.formGroup.reset();
  }

  deleteTodo(id: string) {
    this.store.dispatch(deleteTodo({ id }));
  }
}
