import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginDto } from '../models/logindto.model';
import { AuthService } from '../services/auth.service';
import { CommonModule, NgIf } from '@angular/common';
import { SignUpDto } from '../models/signupdto.model';

export interface AuthResponse {
  token: string;
  type: string;
  username: string;
  email: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // showSignInForm = true;

  // usernameOrEmail: string = 'admin';
  // password: string = 'potato';

  // newName: string = 'Martin Tamm';
  // newUsername: string = 'Martin';
  // newEmail: string = 'martinike12@gmail.com';
  // newPassword: string = 'potato';

  loginForm: FormGroup = new FormGroup({
    usernameOrEmail: new FormControl(''),
    password: new FormControl(''),
  });

  signUpForm: FormGroup = new FormGroup({
    newName: new FormControl(''),
    newUsername: new FormControl(''),
    newEmail: new FormControl(''),
    newPassword: new FormControl('')
  });

  constructor(private router: Router, private authService: AuthService) { }

  // toggleForm() {
  //   this.showSignInForm = !this.showSignInForm;
  // }

  onLogin() {
    const loginDto: LoginDto = {
      usernameOrEmail: this.loginForm.get('usernameOrEmail')?.value,
      password: this.loginForm.get('password')?.value,
    }

    this.authService.authenticateUser(loginDto).subscribe({
      next: (data: AuthResponse) => {
          console.log(data);
          alert("Login Success");
          localStorage.setItem('JWT_TOKEN', data.token);
          localStorage.setItem('USERNAME', data.username);
          localStorage.setItem('EMAIL', data.email);
          localStorage.setItem('NAME', data.name);
          localStorage.setItem('ROLE', data.role);
          this.router.navigateByUrl('/home');
      },
      error: (error) => {
          console.error(error);
      }
    });
  }

  onRegister() {
    const signUpDto: SignUpDto = {
      name: this.signUpForm.get('newName')?.value,
      username: this.signUpForm.get('newUsername')?.value,
      email: this.signUpForm.get('newEmail')?.value,
      password: this.signUpForm.get('newPassword')?.value
    }

    this.authService.registerNewUser(signUpDto).subscribe({
      next: (data) => {
          console.log(data);
          alert("Registration Success");
      },
      error: (error) => {
          console.error(error);
      }
    });
  }
  @Input() error: string | null = null;

  @Output() submitEM = new EventEmitter();
}