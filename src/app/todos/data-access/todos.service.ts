import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}
  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000').pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  addTodo(todo: Todo): Observable<Todo> {
    console.log('add todo from service');
    return this.http.post<Todo>('http://localhost:3000', todo).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  deleteTodo(id: string) {
    return this.http.delete(`http://localhost:3000/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
