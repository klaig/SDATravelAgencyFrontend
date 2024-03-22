import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtTourDialogComponent } from './bought-tour-dialog.component';

describe('BoughtTourDialogComponent', () => {
  let component: BoughtTourDialogComponent;
  let fixture: ComponentFixture<BoughtTourDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoughtTourDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoughtTourDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
