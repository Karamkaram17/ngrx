import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksMainComponent } from './books-main.component';

const routes: Routes = [{ path: '', component: BooksMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksMainRoutingModule { }
