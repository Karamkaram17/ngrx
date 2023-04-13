import { Injectable } from '@angular/core';
import { BooksService } from 'src/app/books/data-access/books.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import {
  bookListRetrievalFailure,
  bookListRetrievalSuccess,
  requestBookList,
} from './books.actions';

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private bookService: BooksService) {}

  loadAllBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestBookList),
      switchMap(() => {
        return this.bookService.getBooks().pipe(
          map((books) => bookListRetrievalSuccess({ books })),
          catchError((error) => of(bookListRetrievalFailure({ error })))
        );
      })
    )
  );
}
