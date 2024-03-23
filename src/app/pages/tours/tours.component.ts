import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit{
  searchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {}
  
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      destination: [''],
      minDate: [''],
      maxDate: [''],
      length: ['']
    });
  }

  onSearch() {
    const { destination, minDate, maxDate, length, promoted } = this.searchForm.value;
    let formattedMinDate: string | undefined = minDate ? formatDate(minDate, 'yyyy-MM-dd', 'en-US') : undefined;
    let formattedMaxDate: string | undefined = maxDate ? formatDate(maxDate, 'yyyy-MM-dd', 'en-US') : undefined;

    const searchCriteria = {
      destination, 
      minDate: formattedMinDate, 
      maxDate: formattedMaxDate, 
      length, 
      promoted
    };

    console.log('Searching with criteria:', searchCriteria);
    this.apiService.getAllTours(destination, formattedMinDate, formattedMaxDate, length, promoted)
      .subscribe(tours => {
        console.log(tours);
      });
  }
}