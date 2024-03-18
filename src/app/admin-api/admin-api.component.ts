import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Tour } from '../models/tour.model';

@Component({
  selector: 'app-admin-api',
  templateUrl: './admin-api.component.html',
  styleUrl: './admin-api.component.css'
})
export class AdminApiComponent {


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
    // Get checkbox value
    var checkBox = document.getElementById("promoted") as HTMLInputElement;
    var isChecked = checkBox.checked;
    var isPromoted = isChecked ? true : false;
    var destination = document.getElementById("destination") as HTMLInputElement;
    var departureDate = document.getElementById("departuredate") as HTMLInputElement;
    var returnDate = document.getElementById("returndate") as HTMLInputElement;
    var adultPrice = document.getElementById("adultprice") as HTMLInputElement;
    var childPrice = document.getElementById("childprice") as HTMLInputElement;
    var availableSeats = document.getElementById("availableseats") as HTMLInputElement;

    // Calculate length of tour
    var time = new Date(returnDate.value).getTime() - new Date(departureDate.value).getTime();
    var days = time / (1000 * 3600 * 24);


    // initialize a tour object
    var tour: Tour = {
      destination: destination.value.toUpperCase(),
      departureDate: departureDate.value,
      returnDate: returnDate.value,
      length: days,
      adultPrice: parseFloat(adultPrice.value),
      childPrice: parseFloat(childPrice.value),
      promoted: isPromoted,
      availableSeats: parseInt(availableSeats.value)
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
    // Get checkbox value
    var checkBox = document.getElementById("promoted") as HTMLInputElement;
    var isChecked = checkBox.checked;
    var isPromoted = isChecked ? true : false;
    var destination = document.getElementById("destination") as HTMLInputElement;
    var departureDate = document.getElementById("departuredate") as HTMLInputElement;
    var returnDate = document.getElementById("returndate") as HTMLInputElement;
    var adultPrice = document.getElementById("adultprice") as HTMLInputElement;
    var childPrice = document.getElementById("childprice") as HTMLInputElement;
    var availableSeats = document.getElementById("availableseats") as HTMLInputElement;

    var tourId = document.getElementById("tour.id") as HTMLInputElement;

    // Calculate length of tour
    var time = new Date(returnDate.value).getTime() - new Date(departureDate.value).getTime();
    var days = time / (1000 * 3600 * 24);

    // initialize a tour object
    var tour: Tour = {
      destination: destination.value.toUpperCase(),
      departureDate: departureDate.value,
      returnDate: returnDate.value,
      length: days,
      adultPrice: parseFloat(adultPrice.value),
      childPrice: parseFloat(childPrice.value),
      promoted: isPromoted,
      availableSeats: parseInt(availableSeats.value)
    };

    this.apiService.updateTour(parseInt(tourId.value), tour).subscribe({
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

  deleteTour() {
    var tourId = document.getElementById("tour.id") as HTMLInputElement;

    this.apiService.deleteTour(parseInt(tourId.value)).subscribe({
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
    var checkBox = document.getElementById("promoted") as HTMLInputElement;
    var isChecked = checkBox.checked;
    var isPurchased = isChecked ? true : false;

    this.apiService.findAllByIsPurchased(isPurchased).subscribe({
      next: (data) => {
        console.log(data);
        this.updateJsonOutput(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  findAllByUserId() { }

  findAllUsersByTour() { }
}