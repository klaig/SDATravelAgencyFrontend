import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-purchasedata-api',
  templateUrl: './purchasedata-api.component.html',
  styleUrl: './purchasedata-api.component.css'
})
export class PurchasedataApiComponent {

  constructor(private apiService: ApiService) { }

  // Function to handle button clicks and update the JSON output
  updateJsonOutput(data: any): void {
    // Convert data to JSON format with indentation
    const json = JSON.stringify(data, null, 2);
    // Find the JSON output element by its ID and update its text content
    const jsonOutputElement = document.getElementById('jsonOutputPurchasedata');
    if (jsonOutputElement) {
      jsonOutputElement.textContent = json;
    }
  }


}
