import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferssListComponent } from './offerss-list.component';
import {Offer} from '../../../model/Offer';
describe('offersListComponent', () => {
  let component: OfferssListComponent;
  let fixture: ComponentFixture<OfferssListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferssListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferssListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
