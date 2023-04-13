import { createAction, props } from '@ngrx/store';
import { Book } from '../../books/interfaces/book';

export const requestBookList = createAction('[Book] Load Books Request');

export const bookListRetrievalSuccess = createAction(
  '[Book] Load Book Success',
  props<{ books: Book[] }>()
);

export const bookListRetrievalFailure = createAction(
  '[Book] Load Book Failure',
  props<{ error: string }>()
);

export const loadBookCollection = createAction(
  '[Book] Load Book Collection Request'
);

export const addBookToCollection = createAction(
  '[Book] add Book Success',
  props<{ bookId: string }>()
);

export const removeBookFromCollection = createAction(
  '[Book] Load Book Failure',
  props<{ bookId: string }>()
);

// export const BooksCollectionActions = createActionGroup({
//   source: 'Books',
//   events: {
//     'Add Book': props<{ bookId: string }>(),
//     'Remove Book': props<{ bookId: string }>(),
//   },
// });

// export const BooksApiActions = createActionGroup({
//   source: 'Books API',
//   events: {
//     'Request Book List': props<{ msg: string }>(),
//     'Book List Retrieval Success': props<{ books: Book[] }>(),
//     'Book List Retrieval Failure': props<{ error: string }>(),
//   },
// });
