import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Tour } from '../../models/tour.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  selectedDestination: string = '';
  tours: Tour[] = [];
  promotedTours: Tour[] = [];
  tourGroups: Tour[][] = [];

  constructor(private apiService: ApiService) { }
  
  ngOnInit() {
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
//   onSearch() {
//     this.apiService.findAllByDestination(this.selectedDestination)
//     .subscribe({
//       next: (data) => {
//         // Handle the emitted data (the tours)
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);

//         this.tours = data.filter(tour => {
//           const departureDate = new Date(tour.departureDate);
//           console.log("dep: " + departureDate);
//           console.log("today: " + today);
//           return departureDate >= today;
//         });
//       },
//       error: (error) => {
//         // Handle any errors
//         console.error('Error fetching tours:', error);
//       },
//       complete: () => {
//         // Handle completion
//         console.log('Tour fetching completed');
//       }
//     });
// }


}