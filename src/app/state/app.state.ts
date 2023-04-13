import { BookState } from './books/books.reducers';
import { TodoState } from './todos/todo.reducer';

export interface AppState {
  todos: TodoState;
  books: BookState;
}
