import {Injectable} from '@angular/core';
import {OffersService} from '../services/offers.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  GetAllofferssActionError,
  GetAllOffersActionSuccess,
  GetSelectedOffersActionError,
  GetSelectedOffersActionSuccess,
  OffersActions,
  OffersActionsTypes,
  SearchOffersActionSuccess,
  SearchOffersActionError,
  DeleteOffersActionSuccess,
  DeleteOffersActionError,
  NeweOffersActionSuccess,
  SaveOffersActionSuccess,
  SaveOffersActionError,
  EditOffersActionSuccess,
  EditOffersActionError,
  UpdateOffersActionSuccess, UpdateOffersActionError
} from './offersActions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Offer} from '../model/Offer';

@Injectable()
export class OffersEffects {
  constructor(private Offerservice:OffersService, private effectActions:Actions) {
  }

  getAllOffersEffect:Observable<OffersActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(OffersActionsTypes.GET_ALL_Offers),
      mergeMap((action:OffersActions)=>{
            return this.Offerservice.getOffers()
              .pipe(
                map((Offers)=> new GetAllOffersActionSuccess(Offers)),
                catchError((err)=>of(new GetAllofferssActionError(err.message)))
              )
      })
    )
  );

  getSelectedOfferssEffect:Observable<OffersActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(OffersActionsTypes.GET_SELECTED_Offers),
      mergeMap((action:OffersActions)=>{
        return this.Offerservice.getSelectedOffers()
          .pipe(
            map((Offers)=> new GetSelectedOffersActionSuccess(Offers)),
            catchError((err)=>of(new GetSelectedOffersActionError(err.message)))
          )
      })
    )
  );

  SearchOffersEffect:Observable<OffersActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(OffersActionsTypes.Search_Offers),
      mergeMap((action:OffersActions)=>{
        return this.Offerservice.searchOffers(action.payload)
          .pipe(
            map((Offers)=> new SearchOffersActionSuccess(Offers)),
            catchError((err)=>of(new SearchOffersActionError(err.message)))
          )
      })
    )
  );
//delete
  DeleteOffersEffect:Observable<OffersActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(OffersActionsTypes.Delete_Offers),
      mergeMap((action:OffersActions)=>{
        return this.Offerservice.delete(action.payload.id)
          .pipe(
            map(()=> new DeleteOffersActionSuccess(action.payload)),
            catchError((err)=>of(new DeleteOffersActionError(err.message)))
          )
      })
    )
  );

  //New

  NewOffersEffect:Observable<OffersActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(OffersActionsTypes.New_Offers),
      map((action:OffersActions)=>{
        return new NeweOffersActionSuccess({});
      })
    )
  );

  //Save
  SaveOffersEffect:Observable<OffersActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(OffersActionsTypes.Save_Offers),
      mergeMap((action:OffersActions)=>{
        return this.Offerservice.save(action.payload)
          .pipe(
            map((Offer)=> new SaveOffersActionSuccess(Offer)),
            catchError((err)=>of(new SaveOffersActionError(err.message)))
          )
      })
    )
  );

  //Edit
  EditOffersEffect:Observable<OffersActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(OffersActionsTypes.Edit_Offers),
      mergeMap((action:OffersActions)=>{
        return this.Offerservice.getOfferById(action.payload)
          .pipe(
            map((Offer)=> new EditOffersActionSuccess(Offer)),
            catchError((err)=>of(new EditOffersActionError(err.message)))
          )
      })
    )
  );

  //Update
  UpdateOffersEffect:Observable<OffersActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(OffersActionsTypes.Update_Offers),
      mergeMap((action:OffersActions)=>{
        return this.Offerservice.update(action.payload)
          .pipe(
            map((Offer)=> new UpdateOffersActionSuccess(Offer)),
            catchError((err)=>of(new UpdateOffersActionError(err.message)))
          )
      })
    )
  );

}
