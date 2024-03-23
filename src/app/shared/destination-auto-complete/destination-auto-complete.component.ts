import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-destination-auto-complete',
  templateUrl: './destination-auto-complete.component.html',
  styleUrls: ['./destination-auto-complete.component.css']
})
export class DestinationAutoCompleteComponent implements OnInit {
  destinations: string[] = ['Rome', 'Venice', 'Barcelona', 'Malaga', 'Toronto', 'Vancouver', 'Mexico City', 'Cancun', 'Bangkok', 'Phuket', 'Delhi', 'Mumbai'];
  filteredDestinations!: Observable<string[]>;

  @Input() formGroup!: FormGroup;
  @Input() controlName!: string; //destination

  ngOnInit() {
    if (!this.formGroup || !this.controlName) {
      throw new Error('FormGroup and controlName inputs must be provided');
    }

    const control = this.formGroup.get(this.controlName);
    if (!control) {
      throw new Error(`Control '${this.controlName}' does not exist in the form group`);
    }

    this.filteredDestinations = control.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterDestinations(value || ''))
    );
  }

  private _filterDestinations(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.destinations.filter(destination => destination.toLowerCase().includes(filterValue));
  }
}