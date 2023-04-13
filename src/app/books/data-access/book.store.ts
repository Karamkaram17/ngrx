import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Book } from '../interfaces/book';
import { tap } from 'rxjs';
import { BooksService } from './books.service';

export interface ComponentBookState {
  books: Book[];
  status: 'Pending' | 'Loading' | 'Success' | 'Error';
  error: string | null;
  collection: Book[];
}

const defaultState: ComponentBookState = {
  books: [],
  status: 'Pending',
  error: null,
  collection: [],
};

@Injectable()
export class ComponentBookStore extends ComponentStore<ComponentBookState> {
  constructor(private booksService: BooksService) {
    super(defaultState);
  }

  readonly book$ = this.select((state) => state.books);
  readonly collection$ = this.select((state) => state.collection);
  // readonly book$ = this.select((state) => state);

  getAllBooks = this.effect(() =>
    this.booksService.getBooks().pipe(
      tap(() => this.setState((state) => ({ ...state, status: 'Loading' }))),
      tap({
        next: (books) =>
          this.setState((state) => ({
            ...state,
            status: 'Success',
            books,
          })),
        error: (err) =>
          this.setState((state) => ({
            ...state,
            error: err.message,
            status: 'Error',
          })),
      })
    )
  );

  addBook(bookId: string) {
    this.setState((state) => ({
      ...state,
      collection: addBook(state, bookId),
    }));
  }

  RemoveBook(bookId: string) {
    this.setState((state) => ({
      ...state,
      collection: state.collection.filter((b) => b.id !== bookId),
    }));
  }
}

const addBook = (state: ComponentBookState, id: string) => {
  const book = state.books.find((b) => b.id === id) as Book;

  if (state.collection.find((b) => b.id === book.id)) return state.collection;
  return [...state.collection, book];
};
