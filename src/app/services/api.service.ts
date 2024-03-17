import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // API calls will be made here
  /* The HttpClient service is injected into the constructor, which allows you to make HTTP requests to the API. */
  /* getSomeData() {
    return this.http.get('https://api.example.com/data');
  } */
  getAllTours() {
    return this.http.get('http://localhost:8080/api/v1/tours');
  }
  

}
