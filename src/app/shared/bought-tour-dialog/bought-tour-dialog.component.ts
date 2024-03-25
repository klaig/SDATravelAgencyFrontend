import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bought-tour-dialog',
  templateUrl: './bought-tour-dialog.component.html',
  styleUrl: './bought-tour-dialog.component.css'
})
export class BoughtTourDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  formatTourDestination(destination: string): string {
    return destination.replace(/_/g, ' ');
  }
}
