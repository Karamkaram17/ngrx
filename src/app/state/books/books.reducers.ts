import { createReducer, on } from '@ngrx/store';
import { Book } from '../../books/interfaces/book';
import {
  addBookToCollection,
  bookListRetrievalFailure,
  bookListRetrievalSuccess,
  loadBookCollection,
  removeBookFromCollection,
  requestBookList,
} from './books.actions';

export interface BookState {
  books: Book[];
  error: string | null;
  status: 'pending' | 'error' | 'loading' | 'success';
  bookCollection: Book[];
  addedBookId: string;
  DeletedBookId: string;
}

const initialState: BookState = {
  books: [],
  error: null,
  status: 'pending',
  bookCollection: [],
  addedBookId: '',
  DeletedBookId: '',
};

export const booksReducer = createReducer(
  initialState,

  on(requestBookList, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(bookListRetrievalSuccess, (state, action) => ({
    ...state,
    books: action.books,
    error: null,
    status: 'success',
  })),

  on(bookListRetrievalFailure, (state, action) => ({
    ...state,
    status: 'error',
    error: action.error,
  })),

  on(loadBookCollection, (state) => state),

  on(addBookToCollection, (state, { bookId }) => ({
    ...state,
    bookCollection: addBook(state, bookId),
  })),

  on(removeBookFromCollection, (state, { bookId }) => ({
    ...state,
    bookCollection: state.bookCollection.filter((b) => b.id !== bookId),
  }))
);

const addBook = (state: BookState, id: string) => {
  const book = state.books.find((b) => b.id === id) as Book;

  if (state.bookCollection.find((b) => b.id === book.id))
    return state.bookCollection;
  return [...state.bookCollection, book];
};
