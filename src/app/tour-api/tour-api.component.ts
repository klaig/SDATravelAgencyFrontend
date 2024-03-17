import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tour-api',
  templateUrl: './tour-api.component.html',
  styleUrl: './tour-api.component.css'
})
export class TourApiComponent {

  constructor(private apiService: ApiService) { }

  getAllTours() {
    this.apiService.getAllTours().subscribe({
      next: (data) => {
        // Handle the data from the API
        console.log(data);
      },
      error: (error) => {
        // Handle the error
        console.error(error);
      }
    });
    //gets data from the API call (getAllTours) in services/api.service.ts
  }
}
