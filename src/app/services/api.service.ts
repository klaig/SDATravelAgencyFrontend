import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tour } from '../models/tour.model';
import { PurchaseData} from '../models/purchasedata.model';
import { LoginDto } from '../models/logindto.model';
import { SignUpDto } from '../models/signupdto.model';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response.model';
import { User } from '../models/user.model';

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
  findAllPurchaseData(): Observable<PurchaseData[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<PurchaseData[]>('http://localhost:8080/api/admin/tour/all', { headers: headers });
  }
  
  // RequestBody post request
  createTour(tour: Tour) {
    const headers = this.getAuthHeaders();
    return this.http.post('http://localhost:8080/api/admin/tour/create', tour, { headers: headers });
  }

  // PathVariable, RequestBody put request
  updateTour(tourId: number, tour: Tour) {
    const headers = this.getAuthHeaders();
    return this.http.put(`http://localhost:8080/api/admin/tours/${tourId}`, tour, { headers: headers });
  }

  // PathVariable delete request
  deleteTour(tourId: number) {
    const headers = this.getAuthHeaders();
    return this.http.delete(`http://localhost:8080/api/admin/tours/${tourId}`, { headers: headers });
  }

  // RequestParam get request
  findAllByIsPurchased(isPurchased: boolean): Observable<PurchaseData[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<PurchaseData[]>('http://localhost:8080/api/admin/tour/bought?isPurchased=' + isPurchased, { headers: headers });
  }

  

  // returns users who have bought tour
  findAllUsersByTour(tourId: number): Observable<User[]>{
    const headers = this.getAuthHeaders();
    return this.http.get<User[]>('http://localhost:8080/api/admin/tour/users?tourId='+ tourId, { headers: headers });
  }



  // Admin api calls end
  // Tour api calls start
  // returns all tours
  getAllTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>('http://localhost:8080/api/v1/tours');
  }

  // returns tour by id
  findById(tourId: number): Observable<Tour> {
    return this.http.get<Tour>(`http://localhost:8080/api/v1/tour?tourId=` + tourId);
  }

  // returns tours by destination
  findAllByDestination(destination: string): Observable<Tour[]> {
    return this.http.get<Tour[]>('http://localhost:8080/api/v1/tours/city?city=' + destination);
  }

  // returns tours by departure date
  findAllByDepartureDateBetween(minDate: string, maxDate: string): Observable<Tour[]> {
    return this.http.get<Tour[]>('http://localhost:8080/api/v1/tours/dates?minDate=' + minDate + '&maxDate=' + maxDate);
  }

  // returns tours by length
  findAllByLength(days: number): Observable<Tour[]> {
    return this.http.get<Tour[]>('http://localhost:8080/api/v1/tours/length?days=' + days);
  }

  // returns tours by price
  findAllByAdultPriceBetween(minPrice: number, maxPrice: number): Observable<Tour[]> {
    return this.http.get<Tour[]>('http://localhost:8080/api/v1/tours/price?min=' + minPrice + '&max=' + maxPrice);
  }

  // returns tours by promotion
  findAllByPromoted(isPromoted: boolean): Observable<Tour[]> {
    return this.http.get<Tour[]>('http://localhost:8080/api/v1/tours/promoted?promoted=' + isPromoted);
  }

  // returns tours bought by specific userId
  findAllBoughtTours(userId: number): Observable<Tour[]> {
    return this.http.get<Tour[]>('http://localhost:8080/api/v1/mytours?userId=' + userId);
  }

  // Tour api calls end
  // PurchaseData api calls start

  createPurchasedData(purchaseData: PurchaseData): Observable<PurchaseData> {
    return this.http.post<PurchaseData>('http://localhost:8080/api/v1/tour/purchase', purchaseData);
  }

  calculateTotal(purchaseDataId: number): Observable<number> {
    return this.http.get<number>('http://localhost:8080/api/v1/tour/price?purchaseDataId=' + purchaseDataId);
  }

  finalizePurchase(purchaseDataId: number) {
    return this.http.get('http://localhost:8080/api/v1/tour/purchase?purchaseDataId=' + purchaseDataId );
  }

  // returns purchase data by userId
  findAllByUserId(userId: number): Observable<PurchaseData[]>{
    const headers = this.getAuthHeaders();
    return this.http.get<PurchaseData[]>('http://localhost:8080/api/v1/tour/userId?userId='+ userId, { headers: headers });
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
