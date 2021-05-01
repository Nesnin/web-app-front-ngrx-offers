import {Action} from '@ngrx/store';
import {Offer} from '../model/Offer';

export enum OffersActionsTypes{
  GET_ALL_Offers="[Offers] Get All Offers",
  GET_ALL_Offers_SUCCESS="[Offers] Get All Offers Success",
  GET_ALL_Offers_ERROR="[Offers] Get All Offers Error",

  GET_SELECTED_Offers="[Offers] Get Selected Offers",
  GET_SELECTED_Offers_SUCCESS="[Offers] Get Selected Offers Success",
  GET_SELECTED_Offers_ERROR="[Offers] Get Selected Offers Error",

  Search_Offers="[Offers] Search Offers",
  Search_Offers_SUCCESS="[Offers] Search Offers Success",
  Search_Offers_ERROR="[Offers] Search Offers Error",

  Delete_Offers="[Offers] Delete Offers",
  Delete_Offers_SUCCESS="[Offers] Delete Offers Success",
  Delete_Offers_ERROR="[Offers] Delete Offers Error",

// New offer

  New_Offers="[Offers] New Offers",
  New_Offers_SUCCESS="[Offers] New Offers Success",
  New_Offers_ERROR="[Offers] New Offers Error",

  // save offer

  Save_Offers="[Offers] save Offers",
  Save_Offers_SUCCESS="[Offers] save Offers Success",
  Save_Offers_ERROR="[Offers] save Offers Error",

  // edit offer

  Edit_Offers="[Offers] Edit Offers",
  Edit_Offers_SUCCESS="[Offers] Edit Offers Success",
  Edit_Offers_ERROR="[Offers] Edit Offers Error",


  // update offer

  Update_Offers="[Offers] Update Offers",
  Update_Offers_SUCCESS="[Offers] Update Offers Success",
  Update_Offers_ERROR="[Offers] Update Offers Error",

}

export class GetAllOfferssAction implements Action{
  type: OffersActionsTypes=OffersActionsTypes.GET_ALL_Offers;
  constructor(public payload:any) {
  }
}

export class GetAllOffersActionSuccess implements Action{
  type: OffersActionsTypes=OffersActionsTypes.GET_ALL_Offers_SUCCESS;
  constructor(public payload:Offer[]) {
  }
}

export class GetAllofferssActionError implements Action{
  type: OffersActionsTypes=OffersActionsTypes.GET_ALL_Offers_ERROR;
  constructor(public payload:string) {
  }
}

export class GetSelectedOffersAction implements Action{
  type: OffersActionsTypes=OffersActionsTypes.GET_SELECTED_Offers;
  constructor(public payload:any) {
  }
}

export class GetSelectedOffersActionSuccess implements Action{
  type: OffersActionsTypes=OffersActionsTypes.GET_SELECTED_Offers_SUCCESS;
  constructor(public payload:Offer[]) {
  }
}

export class GetSelectedOffersActionError implements Action{
  type: OffersActionsTypes=OffersActionsTypes.GET_SELECTED_Offers_ERROR;
  constructor(public payload:string) {
  }
}
//recherche

export class SearchOffersAction implements Action{
  type: OffersActionsTypes=OffersActionsTypes.Search_Offers;

  constructor(public payload: { dataForm: undefined }) {
  }
}

export class SearchOffersActionSuccess implements Action{
  type: OffersActionsTypes=OffersActionsTypes.Search_Offers_SUCCESS;
  constructor(public payload:Offer[]) {
  }
}

export class SearchOffersActionError implements Action{
  type: OffersActionsTypes=OffersActionsTypes.Search_Offers_ERROR;
  constructor(public payload:string) {
  }
}

//delete
export class DeleteOffersAction implements Action{
  type: OffersActionsTypes=OffersActionsTypes.Delete_Offers;
  constructor(public payload:Offer) {
  }
}

export class DeleteOffersActionSuccess implements Action{
  type: OffersActionsTypes=OffersActionsTypes.Delete_Offers_SUCCESS;
  constructor(public payload:Offer) {
  }
}

export class DeleteOffersActionError implements Action{
  type: OffersActionsTypes=OffersActionsTypes.Delete_Offers_ERROR;
  constructor(public payload:string) {
  }
}

// new

export class NeweOffersAction implements Action{
  type: OffersActionsTypes=OffersActionsTypes.New_Offers;
  constructor(public payload:any) {
  }
}

export class NeweOffersActionSuccess implements Action{
  type: OffersActionsTypes=OffersActionsTypes.New_Offers_SUCCESS;
  constructor(public payload:any) {
  }
}

export class NewOffersActionError implements Action{
  type: OffersActionsTypes=OffersActionsTypes.New_Offers_ERROR;
  constructor(public payload:string) {
  }
}

// Save
export class SaveOffersAction implements Action{
  type: OffersActionsTypes=OffersActionsTypes.Save_Offers;
  constructor(public payload:Offer) {
  }
}


export class SaveOffersActionSuccess implements Action{
  type: OffersActionsTypes=OffersActionsTypes.Save_Offers_SUCCESS;
  constructor(public payload:Offer) {
  }
}

export class SaveOffersActionError implements Action{
  type: OffersActionsTypes=OffersActionsTypes.Save_Offers_ERROR;
  constructor(public payload:string) {
  }
}

// Edit

export class EditOffersAction implements Action{
  type: OffersActionsTypes=OffersActionsTypes.Edit_Offers;
  constructor(public payload:number) {
  }
}

export class EditOffersActionSuccess implements Action{
  type: OffersActionsTypes=OffersActionsTypes.Edit_Offers_SUCCESS;
  constructor(public payload:Offer) {
  }
}

export class EditOffersActionError implements Action{
  type: OffersActionsTypes=OffersActionsTypes.Edit_Offers_ERROR;
  constructor(public payload:string) {
  }
}

// update

export class UpdateOffersAction implements Action{
  type: OffersActionsTypes=OffersActionsTypes.Update_Offers;
  constructor(public payload:Offer) {
  }
}

export class UpdateOffersActionSuccess implements Action{
  type: OffersActionsTypes=OffersActionsTypes.Update_Offers_SUCCESS;
  constructor(public payload:Offer) {
  }
}

export class UpdateOffersActionError implements Action{
  type: OffersActionsTypes=OffersActionsTypes.Update_Offers_ERROR;
  constructor(public payload:string) {
  }
}

export type OffersActions =
    GetAllOfferssAction | GetAllOffersActionSuccess | GetAllofferssActionError
    | GetSelectedOffersAction | GetSelectedOffersActionSuccess | GetSelectedOffersActionError
  |SearchOffersAction | SearchOffersActionSuccess | SearchOffersActionError | DeleteOffersAction
  | DeleteOffersActionError | DeleteOffersActionSuccess |NeweOffersAction | NewOffersActionError |
  NeweOffersActionSuccess | SaveOffersAction |SaveOffersActionError | SaveOffersActionSuccess
|EditOffersAction |EditOffersActionError |EditOffersActionSuccess
  ;
