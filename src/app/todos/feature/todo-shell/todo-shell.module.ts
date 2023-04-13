import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoShellRoutingModule } from './todo-shell-routing.module';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from 'src/app/state/todos/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from 'src/app/state/todos/todo.effects';

@NgModule({
  imports: [
    CommonModule,
    TodoShellRoutingModule,
    StoreModule.forFeature('todos', TodoReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class TodoShellModule {}
