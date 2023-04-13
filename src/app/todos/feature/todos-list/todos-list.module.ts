import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosListRoutingModule } from './todos-list-routing.module';
import { TodosListComponent } from './todos-list.component';
import { TodoModule } from '../../ui/todo/todo.module';
import { AddTodoModule } from '../../ui/add-todo/add-todo.module';

@NgModule({
  declarations: [TodosListComponent],
  imports: [CommonModule, TodosListRoutingModule, TodoModule, AddTodoModule],
})
export class TodosListModule {}
