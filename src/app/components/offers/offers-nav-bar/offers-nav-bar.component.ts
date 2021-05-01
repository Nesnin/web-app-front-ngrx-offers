import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {GetAllOfferssAction, GetSelectedOffersAction, OffersActionsTypes, SearchOffersAction} from '../../../ngrx/offersActions';
import {Router} from '@angular/router';
import {OffersState} from '../../../ngrx/offersReducer';

@Component({
  selector: 'app-Offers-nav-bar',
  templateUrl: './Offers-nav-bar.component.html',
  styleUrls: ['./offers-nav-bar.component.css']
})
export class OffersNavBarComponent implements OnInit {

  state:OffersState|null=null;
  readonly stateOffers = OffersActionsTypes;
  constructor(private store:Store<any>,private router:Router) { }

  ngOnInit(): void {
    this.store.subscribe(state=>{
      this.state=state.catalogState;
    });
  }

  onGetAllOffers() {
    this.store.dispatch(new GetAllOfferssAction({}))
  }

  onGetSelectedOffers() {
    this.store.dispatch(new GetSelectedOffersAction({}))
  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchOffersAction(dataForm.nn));
  }

  AddOffer() {
    this.router.navigateByUrl("/newOffer");

  }
}
