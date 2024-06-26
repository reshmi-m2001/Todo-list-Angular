import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getHello(){
    return  this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  public getTodo(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
}
