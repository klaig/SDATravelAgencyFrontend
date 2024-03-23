import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FinalizePurchaseComponent } from '../finalize-purchase/finalize-purchase.component';
import { PurchaseData } from '../../models/purchasedata.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tour-purchase-dialog',
  templateUrl: './tour-purchase-dialog.component.html',
  styleUrl: './tour-purchase-dialog.component.css'
})
export class TourPurchaseDialogComponent {
  totalPrice: number = 0;
  adults: number = 0;
  children: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA)
      public data: any,
      public dialog: MatDialog,
      public dialogRef: MatDialogRef<TourPurchaseDialogComponent>,
      private apiService: ApiService) {}

  createPurchaseData() {
    // Close the current dialog
    this.dialogRef.close();
    // Create a new purchase data object
    const purchaseData: PurchaseData = {
      id: 0,
      numberOfAdults: this.adults,
      numberOfChildren: this.children,
      tourId: this.data.tour.id,
      userId: JSON.parse(localStorage.getItem('ID') || '0'),
      isPurchased: false
    };
    
    this.apiService.createPurchasedData(purchaseData).subscribe({
      next: (purchaseDataData) => {
        console.log(purchaseDataData);
        // Open the new dialog
        this.dialog.open(FinalizePurchaseComponent, {
          width: '250px',
          data: {
            purchaseDataId: purchaseDataData.id
          }
          // You can pass data as well, similar to how you opened the first dialog
        });
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
