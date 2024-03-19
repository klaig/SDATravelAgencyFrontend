
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginDto } from '../models/logindto.model';
import { ApiService } from '../services/api.service';

export interface AuthResponse {
  token: string;
  type: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usernameOrEmail: string = 'kartul';
  password: string = 'kartul';


  constructor(private router: Router, private apiService: ApiService) {
  }

  onLogin() {
    var loginDto: LoginDto = {
      usernameOrEmail: this.usernameOrEmail,
      password: this.password
    }

    this.apiService.authenticateUser(loginDto).subscribe({
      next: (data: AuthResponse) => {
          console.log(data);
          alert("Login Success");
          localStorage.setItem('angular17token', data.token);
          this.router.navigateByUrl('/home');
      },
      error: (error) => {
          console.error(error);
      }
    });
  }
}
// //alert("Login Success");
// localStorage.setItem('angular17token', res.data.token)
// this.router.navigateByUrl('/dashboard')