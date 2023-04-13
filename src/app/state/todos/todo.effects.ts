import { Injectable } from '@angular/core';
import { TodosService } from 'src/app/todos/data-access/todos.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import {
  createTodo,
  createTodoFailure,
  createTodoSuccess,
  deleteTodo,
  deleteTodoFailure,
  deleteTodoSuccess,
  loadAllTodos,
  loadAllTodosFailure,
  loadAllTodosSuccess,
} from './todo.actions';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodosService) {}

  loadAllTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllTodos),
      switchMap(() => {
        return this.todoService.getAllTodos().pipe(
          map((todos) => loadAllTodosSuccess({ todos })),
          catchError((error) => of(loadAllTodosFailure({ error })))
        );
      })
    )
  );

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTodo),
      switchMap((action) => {
        return this.todoService.addTodo(action.todo).pipe(
          map(() => createTodoSuccess({ todo: action.todo })),
          catchError((error) => of(createTodoFailure({ error })))
        );
      })
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodo),
      switchMap((action) => {
        return this.todoService.deleteTodo(action.id).pipe(
          map(() => deleteTodoSuccess({ id: action.id })),
          catchError((error) => of(deleteTodoFailure({ error })))
        );
      })
    )
  );
}
