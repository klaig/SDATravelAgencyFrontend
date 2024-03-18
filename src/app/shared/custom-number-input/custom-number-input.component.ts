import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-number-input',
  templateUrl: './custom-number-input.component.html',
  styleUrl: './custom-number-input.component.css'
})
export class CustomNumberInputComponent {
  @Input() label: string = '';
  @Input() value: number = 1;
  @Output() valueChange = new EventEmitter<number>();

  // get value(): string {
  //   return this.control.value;
  // }

  // set value(value: string) {
  //   this.control.setValue(value);
  //   this.valueChange.emit(value);
  // }

  onValueChange() {
    this.valueChange.emit(this.value);
  }
}
