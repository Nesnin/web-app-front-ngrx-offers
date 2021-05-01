import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersNavBarComponent } from './offers-nav-bar.component';

describe('OffersNavBarComponent', () => {
  let component: OffersNavBarComponent;
  let fixture: ComponentFixture<OffersNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
