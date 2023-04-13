import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTodoComponent } from './add-todo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddTodoComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AddTodoComponent],
})
export class AddTodoModule {}
