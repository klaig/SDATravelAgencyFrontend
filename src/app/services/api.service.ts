import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tour } from '../models/tour.model';

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

  // get request
  findAllPurchaseData() {
    return this.http.get('http://localhost:8080/api/admin/tour/all');
  }
  
  // RequestBody post request
  createTour(tour: Tour) {
    return this.http.post('http://localhost:8080/api/admin/tour/create', tour);
  }

  // PathVariable, RequestBody put request
  updateTour(tourId: number, tour: Tour) {
    return this.http.put(`http://localhost:8080/api/admin/tours/${tourId}`, tour);
  }

  // PathVariable delete request
  deleteTour(tourId: number) {
    return this.http.delete(`http://localhost:8080/api/admin/tours/${tourId}`);
  }

  // RequestParam get request
  findAllByIsPurchased(isPurchased: boolean) {
    return this.http.get('http://localhost:8080/api/admin/tour/bought?isPurchased=' + isPurchased);
  }

}
