import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'books-main', pathMatch: 'full' },
  {
    path: 'books-main',
    loadChildren: () =>
      import('../books-main/books-main.module').then((m) => m.BooksMainModule),
  },
  {
    path: 'books-main-store',
    loadChildren: () =>
      import('../books-main-store/books-main-store.module').then(
        (m) => m.BooksMainStoreModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksShellRoutingModule {}
