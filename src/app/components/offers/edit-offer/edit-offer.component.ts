import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {EditOffersAction, UpdateOffersAction} from '../../../ngrx/offersActions';
import {OffersState, OffersStateEnum} from '../../../ngrx/offersReducer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css']
})
export class EditOfferComponent implements OnInit {

  offerid:number;
  state:OffersState |null=null;
  offerFormGroup : FormGroup |any;
  readonly statEnum =OffersStateEnum;
  formbuilt:Boolean=false;
  submitted:boolean=false;

  constructor(private activatroute:ActivatedRoute, private store:Store<any>,private Fb:FormBuilder,private route:Router) {
    this.offerid = activatroute.snapshot.params.id;
  }
  ngOnInit(): void {
    this.store.dispatch(new EditOffersAction(this.offerid));
    this.store.subscribe(state=>{
    this.state=state.catalogState;
    if(this.state?.dataState==OffersStateEnum.LOADED){

      if(this.state.currentOffer!=null){
        this.offerFormGroup=this.Fb.group({
          id:[this.state?.currentOffer.id],
          name:[this.state?.currentOffer.name,Validators.required],
          depart:[this.state?.currentOffer.depart,Validators.required],
          arrive:[this.state?.currentOffer.arrive,Validators.required],
          prop:[this.state?.currentOffer.prop,Validators.required],
          date:[this.state?.currentOffer.date,Validators.required],
          type:[this.state?.currentOffer.type,Validators.required],
          selected:[this.state?.currentOffer.selected]
        });
        this.formbuilt=true;

        }
    }

    });
  }

  okupd() {
    this.route.navigateByUrl("/offers");
  }

  onUpdateOffer() {
    this.submitted=true;
    if (!this.offerFormGroup?.valid) return;
    this.store.dispatch(new UpdateOffersAction(this.offerFormGroup?.value));

  }
}
