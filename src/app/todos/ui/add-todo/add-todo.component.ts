import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'todos-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  @Input() control = new FormControl();
  @Output() addReq = new EventEmitter();

  add() {
    this.addReq.emit();
  }
}
