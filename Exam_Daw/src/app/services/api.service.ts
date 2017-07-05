import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private http:Http) { }

  getData(){
      
      
      return this.http
      .get('https://jsonplaceholder.typicode.com/users');
   

      
  }

}