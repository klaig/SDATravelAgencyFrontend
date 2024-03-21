import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent{
  isAdmin: boolean = false;
  isUser: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {
    this.checkUserRole();
    this.isLoggedIn = !!localStorage.getItem('ROLE');
  }

  checkUserRole() {
    const role = localStorage.getItem('ROLE');

    this.isAdmin = role === 'ROLE_ADMIN';
    this.isUser = role === 'ROLE_USER';
  }

  logout() {
    localStorage.removeItem('JWT_TOKEN');
    localStorage.removeItem('USERNAME');
    localStorage.removeItem('ROLE');
    localStorage.removeItem('NAME');
    localStorage.removeItem('EMAIL');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  // doApiCall() {
  //   this.apiService.getAllTours().subscribe((data: any) => {
  //     console.log(data);
  //     // response from the API will be logged to the console
  // }, (error: any) => {
  //     console.error(error);
  //     // error message will be logged to the console
  // });
  //  }
}
