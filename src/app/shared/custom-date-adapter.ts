import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

@Injectable({
    providedIn: 'root' // This makes the service available application-wide
  })

export class CustomDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      return formatDate(date, 'MM/dd/yyyy', this.locale); // Format for display
    } else {
      return date.toISOString(); // Format for backend (or any other format)
    }
  }
}