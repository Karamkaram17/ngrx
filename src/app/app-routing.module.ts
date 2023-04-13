import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'books',
    loadChildren: () =>
      import('./books/feature/books-shell/books-shell.module').then(
        (m) => m.BooksShellModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/feature/home-shell/home-shell.module').then(
        (m) => m.HomeShellModule
      ),
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./todos/feature/todo-shell/todo-shell.module').then(
        (m) => m.TodoShellModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./shared/ui/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
