import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-tour-api',
  templateUrl: './tour-api.component.html',
  styleUrl: './tour-api.component.css',
})
export class TourApiComponent{

  startValue: number = 30;
  endValue: number = 240;
  destination: string = "Mexico_city";
  userId: number = 1;
  tourId: number = 1;
  checked: boolean = false;
  tourLength: number = 7;
  minDate: string = "2024-03-19";
  maxDate: string = "2024-03-21";

  constructor(private apiService: ApiService) { }

  // Function to handle button clicks and update the JSON output
  updateJsonOutput(data: any): void {
    // Convert data to JSON format with indentation
    const json = JSON.stringify(data, null, 2);
    // Find the JSON output element by its ID and update its text content
    const jsonOutputElement = document.getElementById('jsonOutput');
    if (jsonOutputElement) {
      jsonOutputElement.textContent = json;
    }
  }

  getAllTours() {

    this.apiService.getAllTours().subscribe({
      next: (data) => {
        // Handle the data from the API
        console.log(data);
        // Update the JSON output
        this.updateJsonOutput(data);
      },
      error: (error) => {
        // Handle the error
        console.error(error);
      }
    });
    //gets data from the API call (getAllTours) in services/api.service.ts
  }

  findById() {

    this.apiService.findById(this.tourId).subscribe({
      next: (data) => {
        console.log(data);
        this.updateJsonOutput(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  findAllByDestination() {

    this.apiService.findAllByDestination(this.destination).subscribe({
      next: (data) => {
        console.log(data);
        this.updateJsonOutput(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  findAllByDepartureDateBetween() {

    const formattedMinDate = formatDate(this.minDate, 'yyyy-MM-dd', 'en-US');
    const formattedMaxDate = formatDate(this.maxDate, 'yyyy-MM-dd', 'en-US');

    this.apiService.findAllByDepartureDateBetween(formattedMinDate, formattedMaxDate).subscribe({
      next: (data) => {
        console.log(data);
        this.updateJsonOutput(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  findAllByLength() {

    this.apiService.findAllByLength(this.tourLength).subscribe({
      next: (data) => {
        console.log(data);
        this.updateJsonOutput(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  findAllByAdultPriceBetween() {

    this.apiService.findAllByAdultPriceBetween(this.startValue, this.endValue).subscribe({
      next: (data) => {
        console.log(data);
        this.updateJsonOutput(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  findAllByPromoted() {

    this.apiService.findAllByPromoted(this.checked).subscribe({
      next: (data) => {
        console.log(data);
        this.updateJsonOutput(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  findAllBoughtTours() {

    this.apiService.findAllBoughtTours(this.userId).subscribe({
      next: (data) => {
        console.log(data);
        this.updateJsonOutput(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
