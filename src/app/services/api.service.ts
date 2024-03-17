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

  // Admin api calls start
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

  // Admin api calls end
  // Tour api calls start
  // returns all tours
  getAllTours() {
    return this.http.get('http://localhost:8080/api/v1/tours');
  }

  // returns tour by id
  findById(tourId: number) {
    return this.http.get(`http://localhost:8080/api/v1/tour?tourId=` + tourId);
  }

  // returns tours by destination
  findAllByDestination(destination: string) {
    return this.http.get('http://localhost:8080/api/v1/tours/city?city=' + destination);
  }

  // returns tours by departure date
  findAllByDepartureDateBetween(minDate: string, maxDate: string) {
    return this.http.get('http://localhost:8080/api/v1/tours/dates?minDate=' + minDate + '&maxDate=' + maxDate);
  }

  // returns tours by length
  findAllByLength(days: number) {
    return this.http.get('http://localhost:8080/api/v1/tours/length?days=' + days);
  }

  // returns tours by price
  findAllByAdultPriceBetween(minPrice: number, maxPrice: number) {
    return this.http.get('http://localhost:8080/api/v1/tours/price?min=' + minPrice + '&max=' + maxPrice);
  }

  // returns tours by promotion
  findAllByPromoted(isPromoted: boolean) {
    return this.http.get('http://localhost:8080/api/v1/tours/promoted?promoted=' + isPromoted);
  }

  // returns tours bought by specific userId
  findAllBoughtTours(userId: number) {
    return this.http.get('http://localhost:8080/api/v1/mytours?userId=' + userId);
  }

  // Tour api calls end
  // PurchaseData api calls start



  // PurchaseData api calls end
}
