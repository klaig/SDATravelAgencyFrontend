import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent{

  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    console.log("Dropdown Open:", this.dropdownOpen);
  }
  
  constructor(private apiService: ApiService, private router: Router) { }

  doApiCall() {
    this.apiService.getAllTours().subscribe((data: any) => {
      console.log(data);
      // response from the API will be logged to the console
  }, (error: any) => {
      console.error(error);
      // error message will be logged to the console
  });
   }
}
