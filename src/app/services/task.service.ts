import { Injectable } from '@angular/core';
import {Task} from '../Task';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'https://json-file-db.herokuapp.com/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    console.log(this.http);
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    console.log(task.id);
    const url = `${this.apiUrl}/${task.id}`; //  apiurl+'/'+task.id;
    return this.http.delete<Task> (url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task> (this.apiUrl, task, httpOptions);
  }
}
