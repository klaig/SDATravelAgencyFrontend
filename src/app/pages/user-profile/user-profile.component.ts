import { Component, OnInit } from '@angular/core';
import { Tour } from '../../models/tour.model';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { BoughtTourDialogComponent } from '../../shared/bought-tour-dialog/bought-tour-dialog.component';
import { PurchaseData } from '../../models/purchasedata.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{
  boughtTours: Tour[] = [];
  purchaseData: PurchaseData[] = [];
  id!: number;
  name!: string;
  email!: string;
  username!: string;
  total!: number;
  // ! means that the variable will be initialized later and you are sure
  // it wont be used before that time

  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  openDialog(tour: Tour): void {
    // Finds the purchase data that matches the tour id
    const relevantPurchaseData = this.purchaseData.find(pd => pd.tourId === tour.id);

    // If purchase data is found, calculate the total and pass tour and purchaseData to the dialog
    if (relevantPurchaseData) {
      this.apiService.calculateTotal(relevantPurchaseData.id).subscribe(total => {
        this.dialog.open(BoughtTourDialogComponent, {
          width: '250px',
          data: {
            tour: tour,
            purchaseData: relevantPurchaseData,
            total: total
          }
        });
      });
    }
  }

  ngOnInit() {
    this.name = localStorage.getItem('NAME') || '';
    this.email = localStorage.getItem('EMAIL') || '';
    this.username = localStorage.getItem('USERNAME') || '';
    this.id = JSON.parse(localStorage.getItem('ID') || '0');

    this.apiService.findAllBoughtTours(this.id).subscribe(tours => {
      this.boughtTours = tours;
    });
    this.apiService.findAllByUserId(this.id).subscribe(purchaseData => {
      this.purchaseData = purchaseData;
    });
  }
}
