import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    duration: 3000;
    this._snackBar.open("Email sent! We appreciate your feedback.", "close" ,{ duration: 3000 });
    duration: 3000;
  }


}
