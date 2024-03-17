import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tour-api',
  templateUrl: './tour-api.component.html',
  styleUrl: './tour-api.component.css'
})
export class TourApiComponent{

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
    var tourId = document.getElementById("tour.id") as HTMLInputElement;

    this.apiService.findById(parseInt(tourId.value)).subscribe({
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
    var destination = document.getElementById("destination") as HTMLInputElement;

    this.apiService.findAllByDestination(destination.value).subscribe({
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
    var minDate = document.getElementById("mindate") as HTMLInputElement;
    var maxDate = document.getElementById("maxdate") as HTMLInputElement;

    this.apiService.findAllByDepartureDateBetween(minDate.value, maxDate.value).subscribe({
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
    var days = document.getElementById("days") as HTMLInputElement;

    this.apiService.findAllByLength(parseInt(days.value)).subscribe({
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
    var minPrice = document.getElementById("minprice") as HTMLInputElement;
    var maxPrice = document.getElementById("maxprice") as HTMLInputElement;

    this.apiService.findAllByAdultPriceBetween(parseInt(minPrice.value), parseInt(maxPrice.value)).subscribe({
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
    var checkBox = document.getElementById("promoted") as HTMLInputElement;
    var isChecked = checkBox.checked;
    var isPromoted = isChecked ? true : false;

    this.apiService.findAllByPromoted(isPromoted).subscribe({
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
    var userId = document.getElementById("user.id") as HTMLInputElement;

    this.apiService.findAllBoughtTours(parseInt(userId.value)).subscribe({
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
