import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPurchaseDialogComponent } from './tour-purchase-dialog.component';

describe('TourPurchaseDialogComponent', () => {
  let component: TourPurchaseDialogComponent;
  let fixture: ComponentFixture<TourPurchaseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourPurchaseDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourPurchaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
