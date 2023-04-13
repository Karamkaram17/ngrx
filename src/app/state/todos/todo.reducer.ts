import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/todos/interfaces/todo';
import {
  createTodo,
  deleteTodo,
  loadAllTodos,
  loadAllTodosFailure,
  loadAllTodosSuccess,
  createTodoSuccess,
  createTodoFailure,
  deleteTodoSuccess,
  deleteTodoFailure,
} from './todo.actions';

export interface TodoState {
  todos: Todo[];
  error: string | null;
  status: 'pending' | 'error' | 'loading' | 'success';
  createTodoDescription: string;
  createTodoStatus: 'pending' | 'error' | 'loading' | 'success';
  createTodoError: string | null;
  deleteTodoId: string;
  deleteTodoStatus: 'pending' | 'error' | 'loading' | 'success';
  deleteTodoError: string | null;
}

const initialState: TodoState = {
  todos: [],
  error: null,
  status: 'pending',
  createTodoDescription: '',
  createTodoStatus: 'pending',
  createTodoError: null,
  deleteTodoId: '',
  deleteTodoStatus: 'pending',
  deleteTodoError: null,
};

export const TodoReducer = createReducer(
  initialState,

  on(loadAllTodos, (state) => ({ ...state, status: 'loading' })),

  on(loadAllTodosSuccess, (state, action) => ({
    ...state,
    todos: action.todos,
    error: null,
    status: 'success',
  })),

  on(loadAllTodosFailure, (state, action) => ({
    ...state,
    error: action.error,
    status: 'error',
  })),

  on(createTodo, (state, action) => ({
    ...state,
    createTodoDescription: action.todo.description,
    createTodoStatus: 'loading',
  })),

  on(createTodoSuccess, (state, action) => ({
    ...state,
    todos: [...state.todos, action.todo],
    createTodoStatus: 'success',
    createTodoError: null,
  })),

  on(createTodoFailure, (state, action) => ({
    ...state,
    createTodoStatus: 'error',
    createTodoError: action.error,
  })),

  on(deleteTodo, (state, { id }) => ({
    ...state,
    deleteTodoId: id,
    deleteTodoStatus: 'loading',
  })),

  on(deleteTodoSuccess, (state, action) => ({
    ...state,
    todos: state.todos.filter((t) => t.id !== action.id),
    deleteTodoStatus: 'success',
    deleteTodoError: null,
  })),

  on(deleteTodoFailure, (state, action) => ({
    ...state,
    deleteTodoStatus: 'error',
    deleteTodoError: action.error,
  }))
);
