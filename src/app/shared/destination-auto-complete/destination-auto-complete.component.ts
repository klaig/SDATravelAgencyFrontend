import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

export interface CityGroup {
  country: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-destination-auto-complete',
  templateUrl: './destination-auto-complete.component.html',
  styleUrl: './destination-auto-complete.component.css'
})
export class DestinationAutoCompleteComponent implements OnInit{
  @Input() destination: string = 'Bangkok';
  @Output() destinationChange = new EventEmitter<string>();

  cityForm = this._formBuilder.group({
    cityGroup: '',
  });

  cityGroups: CityGroup[] = [
    {
      country: 'Italy',
      names: ['Rome', 'Venice'],
    },
    {
      country: 'Spain',
      names: ['Barcelona', 'Malaga']
    },
    {
      country: 'Canada',
      names: ['Toronto', 'Vancouver']
    },
    {
      country: 'Mexico',
      names: ['Mexico_City', 'Cancun']
    },
    {
      country: 'Thailand',
      names: ['Bangkok', 'Phuket']
    },
    {
      country: 'India',
      names: ['Delhi', 'Mumbai']
    }];

    cityGroupOptions: Observable<CityGroup[]> = new Observable();

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
      this.cityForm = this._formBuilder.group({
        cityGroup: this.destination,
      });

      this.cityGroupOptions = this.cityForm.get('cityGroup')!.valueChanges.pipe(
        map(value => {         
          this.destinationChange.emit(value ?? '');
          return this._filterGroup(value || '');
        }),
      );
    }

    private _filterGroup(value: string): CityGroup[] {
      if (value) {
        return this.cityGroups
          .map(group => ({country: group.country, names: _filter(group.names, value)}))
          .filter(group => group.names.length > 0);
      }
  
      return this.cityGroups;
    }

    // onDestinationChange() {
    //   this.destinationChange.emit(this.destination);
    // }
}
