import { Component, OnInit } from '@angular/core';
import { Tour } from '../../models/tour.model';
import { ApiService } from '../../services/api.service';
import { TourPurchaseDialogComponent } from '../../shared/tour-purchase-dialog/tour-purchase-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-promoted-tours',
  templateUrl: './promoted-tours.component.html',
  styleUrl: './promoted-tours.component.css'
})
export class PromotedToursComponent implements OnInit{

  promotedTours: Tour[] = [];
  tourGroups: Tour[][] = [];

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.apiService.findAllByPromoted(true).subscribe({
      next: (data) => {
        this.promotedTours = data;
        this.groupTours();
      },
      error: (error) => console.error('Error fetching promoted tours:', error)
    });
  }

  private groupTours() {
    for (let i = 0; i < this.promotedTours.length; i += 4) {
      this.tourGroups.push(this.promotedTours.slice(i, i + 4));
    }
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
