import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationAutoCompleteComponent } from './destination-auto-complete.component';

describe('DestinationAutoCompleteComponent', () => {
  let component: DestinationAutoCompleteComponent;
  let fixture: ComponentFixture<DestinationAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestinationAutoCompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestinationAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
