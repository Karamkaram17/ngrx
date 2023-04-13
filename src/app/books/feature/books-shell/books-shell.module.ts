import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksShellRoutingModule } from './books-shell-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { booksReducer } from 'src/app/state/books/books.reducers';
import { BooksEffects } from 'src/app/state/books/books.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BooksShellRoutingModule,
    StoreModule.forFeature('books', booksReducer),
    EffectsModule.forFeature([BooksEffects]),
  ],
})
export class BooksShellModule {}
