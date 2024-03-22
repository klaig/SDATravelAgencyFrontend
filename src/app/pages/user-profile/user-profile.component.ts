import { Component, OnInit } from '@angular/core';
import { Tour } from '../../models/tour.model';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{
  boughtTours: Tour[] = [];
  id!: number;
  name!: string;
  email!: string;
  username!: string;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.name = localStorage.getItem('NAME') || '';
    this.email = localStorage.getItem('EMAIL') || '';
    this.username = localStorage.getItem('USERNAME') || '';
    this.id = JSON.parse(localStorage.getItem('ID') || '0');
    this.apiService.findAllBoughtTours(this.id).subscribe(tours => {
      this.boughtTours = tours;
    });
  }
}
