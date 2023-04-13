import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addBookToCollection,
  removeBookFromCollection,
  requestBookList,
} from 'src/app/state/books/books.actions';
import {
  selectAllBooks,
  selectBooksCollection,
} from 'src/app/state/books/books.selectors';

import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'books-main',
  templateUrl: './books-main.component.html',
  styleUrls: ['./books-main.component.css'],
})
export class BooksMainComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(requestBookList());
  }

  books$ = this.store.select(selectAllBooks);
  bookCollection$ = this.store.select(selectBooksCollection);

  onAdd(bookId: string) {
    this.store.dispatch(addBookToCollection({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBookFromCollection({ bookId }));
  }
}
