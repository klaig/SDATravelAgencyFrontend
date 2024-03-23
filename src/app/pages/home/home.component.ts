import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Tour } from '../../models/tour.model';
import { formatDate } from '@angular/common';
import { TourPurchaseDialogComponent } from '../../shared/tour-purchase-dialog/tour-purchase-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  tours: Tour[] = [];

  promotedTours: Tour[] = [];
  promotedTourGroups: Tour[][] = [];

  searchForm!: FormGroup;
  destination: string = '';

  constructor(private apiService: ApiService, public dialog: MatDialog) { }
  
  ngOnInit() {
    this.searchForm = new FormGroup({
      destination: new FormControl(''),
      // ... other controls ...
    });
    this.apiService.findAllByPromoted(true).subscribe({
      next: (data) => {
        this.promotedTours = data;
        this.groupPromotedTours();
      },
      error: (error) => console.error('Error fetching promoted tours:', error)
    });
  }

  private groupPromotedTours() {
    for (let i = 0; i < this.promotedTours.length; i += 4) {
      this.promotedTourGroups.push(this.promotedTours.slice(i, i + 4));
    }
  }


  onSearch() {
    const destinationControl = this.searchForm.get('destination');
    if (!destinationControl || destinationControl.value === null) {
      console.error('Destination control is not available or has no value');
      return;
    }
    const destination = destinationControl.value;
    this.apiService.findAllByDestination(destination)
    .subscribe({
      next: (data) => {
        // Handle the emitted data (the tours)
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        this.tours = data.filter(tour => {
          const departureDate = new Date(tour.departureDate);
          return departureDate >= today;
        });
        this.tours = data;
        console.log('Tours:', this.tours);
        console.log('Destination:', destination);
      },
      error: (error) => {
        // Handle any errors
        console.error('Error fetching tours:', error);
      },
      complete: () => {
        // Handle completion
        console.log('Tour fetching completed');
      }
    });
}

  openDialog(tour: Tour): void {
    this.dialog.open(TourPurchaseDialogComponent, {
      width: '250px',
      data: {
        tour: tour,
      }
    });
  }

}