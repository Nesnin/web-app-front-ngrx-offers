import {Component, Input, OnInit} from '@angular/core';
import {Offer} from '../../../../model/Offer';
import {DeleteOffersAction} from '../../../../ngrx/offersActions';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';

@Component({
  selector: 'app-Offer-item',
  templateUrl: './Offer-item.component.html',
  styleUrls: ['./Offer-item.component.css']
})
export class OfferItemComponent implements OnInit {
    @Input() offer:Offer|null=null;
  constructor(private store:Store,private route:Router) { }

  ngOnInit(): void {
  }

  onDelete(offer: Offer) {
  this.store.dispatch(new DeleteOffersAction(offer));
  }

  onEdit(offer: Offer) {
    this.route.navigateByUrl("/editOffer/"+offer.id);
  }
}
