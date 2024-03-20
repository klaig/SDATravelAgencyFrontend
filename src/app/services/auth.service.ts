import { Injectable } from '@angular/core';
import { AuthResponse } from '../login/login.component';
import { Observable } from 'rxjs';
import { LoginDto } from '../models/logindto.model';
import { SignUpDto } from '../models/signupdto.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticateUser(loginDto: LoginDto): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('http://localhost:8080/api/auth/signin', loginDto);
  }

  registerNewUser(SignUpDto: SignUpDto) {
    return this.http.post('http://localhost:8080/api/auth/signup', SignUpDto);
  }
}
