import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-finalize-purchase',
  templateUrl: './finalize-purchase.component.html',
  styleUrl: './finalize-purchase.component.css'
})
export class FinalizePurchaseComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<FinalizePurchaseComponent>, private apiService: ApiService, private snackBar: MatSnackBar) {}

  finalizePurchase() {
    this.apiService.finalizePurchase(this.data.purchaseDataId).subscribe({
      next: (dataFromApi) => {
        console.log(dataFromApi);
        this.snackBar.open("Purchase complete", "", {duration: 2000});
        this.dialogRef.close();
      },
      error: (error) => {
        console.error(error);
        this.snackBar.open('Not enough available seats', 'Close', { duration: 3000 });
      },
    });
  }
}
