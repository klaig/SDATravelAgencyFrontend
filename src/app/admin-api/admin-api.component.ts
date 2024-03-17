import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-api',
  templateUrl: './admin-api.component.html',
  styleUrl: './admin-api.component.css'
})
export class AdminApiComponent {


  constructor(private apiService: ApiService) {}

  findAllPurchaseData() {
    this.apiService.findAllPurchaseData().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
