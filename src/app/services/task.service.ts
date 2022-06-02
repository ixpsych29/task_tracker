import { Injectable } from '@angular/core';
import {Task} from '../Task';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';

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
}
