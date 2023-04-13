import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksMainStoreRoutingModule } from './books-main-store-routing.module';
import { BooksMainStoreComponent } from './books-main-store.component';
import { BookModule } from '../../ui/book/book.module';

@NgModule({
  declarations: [BooksMainStoreComponent],
  imports: [CommonModule, BooksMainStoreRoutingModule, BookModule],
})
export class BooksMainStoreModule {}
