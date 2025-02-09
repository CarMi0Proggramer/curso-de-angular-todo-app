import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly baseUrl = 'http://localhost:3000/tasks';
  private readonly http = inject(HttpClient);

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  create(data: { name: string; status: string }): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, data);
  }

  delete(id: string): Observable<Task> {
    return this.http.delete<Task>(`${this.baseUrl}/${id}`);
  }

  update(id: string, data: Partial<Task>) {
    return this.http.patch<Task>(`${this.baseUrl}/${id}`, data);
  }
}
