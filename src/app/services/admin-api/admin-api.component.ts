import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Tour } from '../../models/tour.model';

@Component({
  selector: 'app-admin-api',
  templateUrl: './admin-api.component.html',
  styleUrl: './admin-api.component.css'
})
export class AdminApiComponent {
    adultPrice: number = 1500;
    childPrice: number = 700; 
    departureDate: string = "2024-05-01"; 
    returnDate: string = "2024-05-15"; 
    destination: string = "Rome"; 
    availableSeats: number = 12; 
    purchaseDataId: number = 1; 
    userId: number = 1; 
    tourId: number = 1; 
    checked: boolean = true;

  constructor(private apiService: ApiService) {}

  // Function to handle button clicks and update the JSON output
  updateJsonOutput(data: any): void {
    // Convert data to JSON format with indentation
    const json = JSON.stringify(data, null, 2);
    // Find the JSON output element by its ID and update its text content
    const jsonOutputElement = document.getElementById('jsonOutputAdmin');
    if (jsonOutputElement) {
      jsonOutputElement.textContent = json;
    }
  }

  findAllPurchaseData() {

    this.apiService.findAllPurchaseData().subscribe({
      next: (data) => {
        console.log(data);
        // Update the JSON output
        this.updateJsonOutput(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  createTour() {
   
    // Calculate length of tour
    var time = new Date(this.returnDate).getTime() - new Date(this.departureDate).getTime();
    var days = time / (1000 * 3600 * 24);

    // initialize a tour object
    const tour: Tour = {
      destination: this.destination.toUpperCase(),
      departureDate: this.departureDate,
      returnDate: this.returnDate,
      length: days,
      adultPrice: this.adultPrice,
      childPrice: this.childPrice,
      promoted: this.checked,
      availableSeats: this.availableSeats
    };

    this.apiService.createTour(tour).subscribe({
      next: (data) => {
        // Do something with the data
        console.log(data);
        this.updateJsonOutput(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  updateTour() {

    // Calculate length of tour
    var time = new Date(this.returnDate).getTime() - new Date(this.departureDate).getTime();
    var days = time / (1000 * 3600 * 24);

    // initialize a tour object
    var tour: Tour = {
      destination: this.destination.toUpperCase(),
      departureDate: this.departureDate,
      returnDate: this.returnDate,
      length: days,
      adultPrice: this.adultPrice,
      childPrice: this.childPrice,
      promoted: this.checked,
      availableSeats: this.availableSeats
    };

    this.apiService.updateTour(this.tourId, tour).subscribe({
      next: (data) => {
        // Do something with the data
        this.destination = tour.destination;
        console.log(data);
        this.updateJsonOutput(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  deleteTour() {

    this.apiService.deleteTour(this.tourId).subscribe({
      next: (data) => {
        // Do something with the data
        console.log(data);
        this.updateJsonOutput(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  findAllByIsPurchased() {

    this.apiService.findAllByIsPurchased(this.checked).subscribe({
      next: (data) => {
        console.log(data);
        this.updateJsonOutput(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  findAllByUserId()  {

    this.apiService.findAllByUserId(this.userId).subscribe({
      next: (data) => {
        console.log(data);
        this.updateJsonOutput(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  findAllUsersByTour() {

    this.apiService.findAllUsersByTour(this.tourId).subscribe({
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