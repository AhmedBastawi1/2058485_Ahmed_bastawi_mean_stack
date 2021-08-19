import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Test } from './test';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineTestService {

  constructor(public http:HttpClient) { }
   
  
  git():Observable<Test[]> {
      return this.http.get<Test[]>("/assets/test.json");

    }
  
}





