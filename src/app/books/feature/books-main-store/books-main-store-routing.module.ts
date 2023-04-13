import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksMainStoreComponent } from './books-main-store.component';

const routes: Routes = [{ path: '', component: BooksMainStoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksMainStoreRoutingModule { }
