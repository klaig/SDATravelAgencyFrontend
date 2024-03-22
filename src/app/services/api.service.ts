import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tour } from '../models/tour.model';
import { PurchaseData} from '../models/purchasedata.model';
import { LoginDto } from '../models/logindto.model';
import { SignUpDto } from '../models/signupdto.model';
import { Observable } from 'rxjs';
import { AuthResponse } from '../pages/login/login.component';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  // This method returns the headers that will be used in HTTP requests to the API
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('JWT_TOKEN');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  // API calls will be made here
  /* The HttpClient service is injected into the constructor, which allows you to make HTTP requests to the API. */
  /* getSomeData() {
    return this.http.get('https://api.example.com/data');
  } */

  // Admin api calls start
  // get request
  findAllPurchaseData() {
    const headers = this.getAuthHeaders();
    return this.http.get('http://localhost:8080/api/admin/tour/all', { headers: headers });
  }
  
  // RequestBody post request
  createTour(tour: Tour) {
    const headers = this.getAuthHeaders();
    return this.http.post('http://localhost:8080/api/admin/tour/create', tour, { headers: headers });
  }

  // PathVariable, RequestBody put request
  updateTour(tourId: number, tour: Tour) {
    const headers = this.getAuthHeaders();
    return this.http.put('http://localhost:8080/api/admin/tours/${tourId}', tour, { headers: headers });
  }

  // PathVariable delete request
  deleteTour(tourId: number) {
    const headers = this.getAuthHeaders();
    return this.http.delete('http://localhost:8080/api/admin/tours/${tourId}', { headers: headers });
  }

  // RequestParam get request
  findAllByIsPurchased(isPurchased: boolean) {
    const headers = this.getAuthHeaders();
    return this.http.get('http://localhost:8080/api/admin/tour/bought?isPurchased=' + isPurchased, { headers: headers });
  }

  // returns purchased tours by userId
  findAllByUserId(userId: number) {
    const headers = this.getAuthHeaders();
    return this.http.get('http://localhost:8080/api/admin/tour/userId?userId='+ userId, { headers: headers });
  }

  // returns users who have bought tour
  findAllUsersByTour(tourId: number) {
    const headers = this.getAuthHeaders();
    return this.http.get('http://localhost:8080/api/admin/tour/users?userId='+ tourId, { headers: headers });
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

  createPurchasedData(purchaseData: PurchaseData) {
    return this.http.post('http://localhost:8080/api/v1/tour/purchase', purchaseData);
  }

  calculateTotal(purchaseDataId: number, tourId: number) {
    return this.http.get('http://localhost:8080/api/v1/tour/price?tourId=' + purchaseDataId +'&purchaseDataId=' + tourId);
  }

  finalizePurchase(purchaseDataId: number) {
    return this.http.get('http://localhost:8080/api/v1/tour/purchase?purchaseDataId=' + purchaseDataId );
  }

  // PurchaseData api calls end

  // Auth api calls start

  authenticateUser(loginDto: LoginDto): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('http://localhost:8080/api/auth/signin', loginDto);
  }

  registerNewUser(SignUpDto: SignUpDto) {
    return this.http.post('http://localhost:8080/api/auth/signup', SignUpDto);
  }
}
