import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { formatDate } from '@angular/common';
import { Tour } from '../../models/tour.model';
import { TourPurchaseDialogComponent } from '../../shared/tour-purchase-dialog/tour-purchase-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit{
  searchForm!: FormGroup;
  tours: Tour[] = [];
  filteredTours: Tour[] = [];

  sortOptions = [
    { value: 'adultPrice, asc', display: 'Price: Low to High' },
    { value: 'adultPrice, desc', display: 'Price: High to Low' },
    { value: 'length, asc', display: 'Length: Short to Long' },
    { value: 'length, desc', display: 'Length: Long to Short' },
    { value: 'departureDate, asc', display: 'Departure Date: Sooner to Later' },
    { value: 'departureDate, desc', display: 'Departure Date: Later to Sooner' }
  ];

  selectedSort: string = '';

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private dialog: MatDialog) {}
  
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      destination: [''],
      minDate: [''],
      maxDate: [''],
      length: [''],
      sort: ['']
    });

    // When the search criteria or sort option changes, fetch and sort the tours.
    this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe(val => {
      this.fetchAndSortTours();
    });

    this.fetchAndSortTours(); // Initial fetch

  }

  fetchAndSortTours(): void {
    // Get current form values
    const { destination, minDate, maxDate, length, promoted, sort } = this.searchForm.value;

    let formattedMinDate: string | undefined = minDate ? formatDate(minDate, 'yyyy-MM-dd', 'en-US') : undefined;
    let formattedMaxDate: string | undefined = maxDate ? formatDate(maxDate, 'yyyy-MM-dd', 'en-US') : undefined;
    // Convert dates if necessary and format
    // ...

    // Fetch the tours
    this.apiService.getAllTours(
      destination,
      formattedMinDate,
      formattedMaxDate,
      length,
      promoted,
    ).subscribe(response => {
      this.tours = response.content;
      this.sortTours(); // Sort the tours whenever new data is fetched
    });
  }

  sortTours(): void {
    const sortOption = this.searchForm.get('sort')?.value || '';
    
    switch (sortOption) {
      case 'adultPrice, asc':
        this.filteredTours = this.tours.sort((a, b) => a.adultPrice - b.adultPrice);
        break;
      case 'adultPrice, desc':
        this.filteredTours = this.tours.sort((a, b) => b.adultPrice - a.adultPrice);
        break;
      case 'length, asc':
        this.filteredTours = this.tours.sort((a, b) => a.length - b.length);
        break;
      case 'length, desc':
        this.filteredTours = this.tours.sort((a, b) => b.length - a.length);
        break;
      case 'departureDate, asc':
        this.filteredTours = this.tours.sort((a, b) => new Date(a.departureDate).getTime() - new Date(b.departureDate).getTime());
        break;
      case 'departureDate, desc':
        this.filteredTours = this.tours.sort((a, b) => new Date(b.departureDate).getTime() - new Date(a.departureDate).getTime());
        break;
      default:
        this.filteredTours = this.tours.sort((a, b) => new Date(a.departureDate).getTime() - new Date(b.departureDate).getTime());
    }
  }
  

  // onSearch() {
  //   const { destination, minDate, maxDate, length, promoted } = this.searchForm.value;
  //   let formattedMinDate: string | undefined = minDate ? formatDate(minDate, 'yyyy-MM-dd', 'en-US') : undefined;
  //   let formattedMaxDate: string | undefined = maxDate ? formatDate(maxDate, 'yyyy-MM-dd', 'en-US') : undefined;

  //   const searchCriteria = {
  //     destination, 
  //     minDate: formattedMinDate, 
  //     maxDate: formattedMaxDate, 
  //     length, 
  //     promoted
  //   };

  //   console.log('Searching with criteria:', searchCriteria);
  //   this.apiService.getAllTours(destination, formattedMinDate, formattedMaxDate, length, promoted)
  //     .subscribe(response => {
  //       this.tours = response.content;
  //     });
  // }

  openDialog(tour: Tour): void {
    this.dialog.open(TourPurchaseDialogComponent, {
      width: '250px',
      data: {
        tour: tour,
      }
    });
  }

}