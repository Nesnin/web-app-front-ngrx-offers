import {Component, Input, OnInit} from '@angular/core';
import {OffersState} from '../../../ngrx/offersReducer';

@Component({
  selector: 'app-Offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OfferssListComponent implements OnInit {

  @Input() state:OffersState|null=null;

  constructor() { }

  ngOnInit(): void {
  }

}
