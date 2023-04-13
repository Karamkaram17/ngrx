import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksMainRoutingModule } from './books-main-routing.module';
import { BooksMainComponent } from './books-main.component';
import { BookModule } from '../../ui/book/book.module';
import { NavbarModule } from 'src/app/shared/ui/navbar/navbar.module';

@NgModule({
  declarations: [BooksMainComponent],
  imports: [CommonModule, BooksMainRoutingModule, BookModule],
})
export class BooksMainModule {}
