import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OffersState, OffersStateEnum} from '../../../ngrx/offersReducer';
import {Store} from '@ngrx/store';
import {NeweOffersAction, SaveOffersAction} from '../../../ngrx/offersActions';
import {OffersEffects} from '../../../ngrx/offers-effects.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css']
})
export class NewOfferComponent implements OnInit {

  offerFormgroup:FormGroup |null=null;
  state:OffersState |null=null;
  readonly statEnum = OffersStateEnum ;
  submitted:boolean=false;

  constructor(private store:Store<any>, private frm:FormBuilder) { }

  ngOnInit(): void {
    this.store.dispatch(new NeweOffersAction({}));
    this.store.subscribe(state=>{
      this.state= state.catalogState;
    if (this.state?.dataState==OffersStateEnum.New){
      this.offerFormgroup=this.frm.group({
        name:["name",Validators.required],
        depart:["alger",Validators.required],
        arrive:["alger",Validators.required],
        prop:["auteur",Validators.required],
        date:["30/04/2021",Validators.required],
        type:["",Validators.required],
        selected:[true,Validators.required]
      })
    }
    })

  }

  newOffer() {
    this.store.dispatch(new NeweOffersAction({}));

  }

  onSaveOffer() {
    this.submitted=true;
    if(!this.offerFormgroup?.valid) return;
this.store.dispatch(new SaveOffersAction(this.offerFormgroup?.value));
  }
}
