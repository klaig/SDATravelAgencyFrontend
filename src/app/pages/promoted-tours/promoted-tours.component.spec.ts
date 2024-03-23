import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotedToursComponent } from './promoted-tours.component';

describe('PromotedToursComponent', () => {
  let component: PromotedToursComponent;
  let fixture: ComponentFixture<PromotedToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromotedToursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromotedToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
