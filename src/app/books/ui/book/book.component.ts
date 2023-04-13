import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'books-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() label: string = '';
  @Input() books: ReadonlyArray<Book> = [];
  @Output() request = new EventEmitter<string>();
}
