import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {

  constructor(private router: Router) { }

  navigateToTours(destination: string) {
    this.router.navigate(['/tours'], { queryParams: { destination: destination } });
}
}
