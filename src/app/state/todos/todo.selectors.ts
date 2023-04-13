import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TodoState } from './todo.reducer';

export const selectTodos = (state: AppState) => state.todos;

export const selectAllTodos = createSelector(
  selectTodos,
  (state: TodoState) => state.todos
);

export const todosLoading = createSelector(
  selectTodos,
  (state: TodoState) => state.status
);

export const todosError = createSelector(
  selectTodos,
  (state: TodoState) => state.error
);
