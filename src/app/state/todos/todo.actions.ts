import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/todos/interfaces/todo';

export const loadAllTodos = createAction('[Todo Page] Load Todos');

export const loadAllTodosSuccess = createAction(
  '[Todo] Todo Load Success',
  props<{ todos: Todo[] }>()
);

export const loadAllTodosFailure = createAction(
  '[Todo] Todo Load Failure',
  props<{ error: string }>()
);

export const createTodo = createAction(
  '[Todo] create Todo',
  props<{ todo: Todo }>()
);

export const createTodoSuccess = createAction(
  '[Todo] Create Todo Success',
  props<{ todo: Todo }>()
);

export const createTodoFailure = createAction(
  '[Todo] Create Todo Failure',
  props<{ error: string }>()
);

export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ id: string }>()
);

export const deleteTodoSuccess = createAction(
  '[Todo] Delete Todo Success',
  props<{ id: string }>()
);

export const deleteTodoFailure = createAction(
  '[Todo] Delete Todo Failure',
  props<{ error: string }>()
);
