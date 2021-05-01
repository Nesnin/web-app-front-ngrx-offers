import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OffersComponent} from "./components/offers/offers.component";
import {NewOfferComponent} from './components/offers/new-offer/new-offer.component';
import {EditOfferComponent} from './components/offers/edit-offer/edit-offer.component';

const routes: Routes = [
  {path : 'offers', component : OffersComponent },
  {path : 'newOffer', component :NewOfferComponent },
  {path : 'editOffer/:id', component :EditOfferComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
