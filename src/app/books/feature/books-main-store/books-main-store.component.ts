import { Component, OnInit } from '@angular/core';
import { ComponentBookStore } from '../../data-access/book.store';
import { map, tap } from 'rxjs';

@Component({
  selector: 'books-main-store',
  templateUrl: './books-main-store.component.html',
  styleUrls: ['./books-main-store.component.css'],
  providers: [ComponentBookStore],
})
export class BooksMainStoreComponent implements OnInit {
  constructor(private _bookStore: ComponentBookStore) {}

  ngOnInit(): void {
    this._bookStore.getAllBooks();
  }

  // books$ = this._bookStore.book$.pipe(map((bookState) => bookState.books));
  books$ = this._bookStore.book$;
  bookCollection$ = this._bookStore.collection$;

  onAdd(id: string) {
    this._bookStore.addBook(id);
  }

  onRemove(id: string) {
    this._bookStore.RemoveBook(id);
  }
}
