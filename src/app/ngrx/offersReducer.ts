import {Offer} from '../model/Offer';
import {OffersActions, OffersActionsTypes} from './offersActions';
import {Action, INITIAL_STATE} from '@ngrx/store';
import {act} from '@ngrx/effects';
import {any} from 'codelyzer/util/function';

export enum OffersStateEnum{
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial",
  New="New",
  Edit="EDIT",
  UPDATED="UPDATED"
}
export interface OffersState {
    Offers:Offer[],
    errorMessage:string,
    dataState:OffersStateEnum,
    currentAction:OffersActions|any,
    currentOffer: Offer|null,

}

const initState:OffersState={
  Offers:[],
  errorMessage:"",
  dataState:OffersStateEnum.INITIAL,
  currentOffer:null,
  currentAction:null

}

export function OffersReducer(state=initState, action:Action):OffersState {
  switch (action.type) {
    case OffersActionsTypes.GET_ALL_Offers:
      return {...state, dataState:OffersStateEnum.LOADING,currentAction:<OffersActions>action}
    case OffersActionsTypes.GET_ALL_Offers_SUCCESS:
      return {...state, dataState:OffersStateEnum.LOADED, Offers:(<OffersActions>action).payload, currentAction:<OffersActions>action}
    case OffersActionsTypes.GET_ALL_Offers_ERROR:
      return {...state, dataState:OffersStateEnum.ERROR, errorMessage:(<OffersActions>action).payload, currentAction:<OffersActions>action}

    case OffersActionsTypes.GET_SELECTED_Offers:
      return {...state, dataState:OffersStateEnum.LOADING,currentAction:<OffersActions>action }
    case OffersActionsTypes.GET_SELECTED_Offers_SUCCESS:
      return {...state, dataState:OffersStateEnum.LOADED, Offers:(<OffersActions>action).payload,currentAction:<OffersActions>action}
    case OffersActionsTypes.GET_SELECTED_Offers_ERROR:
      return {...state, dataState:OffersStateEnum.ERROR, errorMessage:(<OffersActions>action).payload,currentAction:<OffersActions>action}

    case OffersActionsTypes.Search_Offers:
      return {...state, dataState:OffersStateEnum.LOADING,currentAction:<OffersActions>action }
    case OffersActionsTypes.Search_Offers_SUCCESS:
      return {...state, dataState:OffersStateEnum.LOADED, Offers:(<OffersActions>action).payload,currentAction:<OffersActions>action}
    case OffersActionsTypes.Search_Offers_ERROR:
      return {...state, dataState:OffersStateEnum.ERROR, errorMessage:(<OffersActions>action).payload,currentAction:<OffersActions>action}

    //delete
    case OffersActionsTypes.Delete_Offers:
      return {...state, dataState:OffersStateEnum.LOADING,currentAction:<OffersActions>action }
    case OffersActionsTypes.Delete_Offers_SUCCESS:
      let o:Offer=(<OffersActions>action).payload
      let index=state.Offers.indexOf(o);
      let listOffer=[...state.Offers];
      listOffer.splice(index,1);
      return {...state, dataState:OffersStateEnum.LOADED, Offers:listOffer,currentAction:<OffersActions>action}
    case OffersActionsTypes.Delete_Offers_ERROR:
      return {...state, dataState:OffersStateEnum.ERROR, errorMessage:(<OffersActions>action).payload,currentAction:<OffersActions>action}


    //New
    case OffersActionsTypes.New_Offers:
      return {...state, dataState:OffersStateEnum.LOADING,currentAction:<OffersActions>action }
    case OffersActionsTypes.New_Offers_SUCCESS:
      return {...state, dataState:OffersStateEnum.New,currentAction:<OffersActions>action}
    case OffersActionsTypes.New_Offers_ERROR:
      return {...state, dataState:OffersStateEnum.ERROR, errorMessage:(<OffersActions>action).payload,currentAction:<OffersActions>action}


    //Save
    case OffersActionsTypes.Save_Offers:
      return {...state, dataState:OffersStateEnum.LOADING,currentAction:<OffersActions>action }
    case OffersActionsTypes.Save_Offers_SUCCESS:
      let offer:Offer[] = [...state.Offers];
      offer.push((<OffersActions>action).payload,)
      return {...state, dataState:OffersStateEnum.LOADED,Offers:offer,currentAction:<OffersActions>action}
    case OffersActionsTypes.Save_Offers_ERROR:
      return {...state, dataState:OffersStateEnum.ERROR, errorMessage:(<OffersActions>action).payload,currentAction:<OffersActions>action}


    //Edit
    case OffersActionsTypes.Edit_Offers:
      return {...state, dataState:OffersStateEnum.LOADING,currentAction:<OffersActions>action }
    case OffersActionsTypes.Edit_Offers_SUCCESS:
      return {...state, dataState:OffersStateEnum.LOADED,currentOffer:(<OffersActions>action).payload,currentAction:<OffersActions>action}
    case OffersActionsTypes.Edit_Offers_ERROR:
      return {...state, dataState:OffersStateEnum.ERROR, errorMessage:(<OffersActions>action).payload,currentAction:<OffersActions>action}


    //Update
    case OffersActionsTypes.Update_Offers:
      return {...state, dataState:OffersStateEnum.LOADING,currentAction:<OffersActions>action }
    case OffersActionsTypes.Update_Offers_SUCCESS:
      let updatedoffer:Offer=(<OffersActions>action).payload;
      let offerl:Offer[]=state.Offers.map(o=>(o.id==updatedoffer.id)?updatedoffer:o)
      return {...state, dataState:OffersStateEnum.UPDATED,Offers:offerl,currentAction:<OffersActions>action}
    case OffersActionsTypes.Update_Offers_ERROR:
      return {...state, dataState:OffersStateEnum.ERROR, errorMessage:(<OffersActions>action).payload,currentAction:<OffersActions>action}


    default : return {...state}


  }
}
