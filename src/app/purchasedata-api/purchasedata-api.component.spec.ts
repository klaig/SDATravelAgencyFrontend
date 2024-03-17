import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedataApiComponent } from './purchasedata-api.component';

describe('PurchasedataApiComponent', () => {
  let component: PurchasedataApiComponent;
  let fixture: ComponentFixture<PurchasedataApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchasedataApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchasedataApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
