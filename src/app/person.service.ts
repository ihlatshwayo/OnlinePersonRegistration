import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class PersonService {
 
  private baseUrl = 'http://localhost:8080/personregistration/api/v1/persons';
 
  constructor(private http: HttpClient) { }
 
  
 
  createPerson(person: any): Observable<any> {
    return this.http.post(`${this.baseUrl + "/add"}`, person);
  }
 
  getPersonsList(): Observable<any> {
    return this.http.get(`${this.baseUrl + "/list"}`);
  }
 
  
}
