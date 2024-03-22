import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourApiComponent } from './tour-api.component';

describe('TourApiComponent', () => {
  let component: TourApiComponent;
  let fixture: ComponentFixture<TourApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
