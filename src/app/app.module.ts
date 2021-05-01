import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { OffersComponent } from './components/offers/offers.component';
import { OffersNavBarComponent } from './components/offers/offers-nav-bar/offers-nav-bar.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {OffersReducer} from './ngrx/offersReducer';
import {OffersEffects} from './ngrx/offers-effects.service';
import { OfferssListComponent } from './components/offers/offers-list/offerss-list.component';
import { OfferItemComponent } from './components/offers/offers-list/offer-item/offer-item.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewOfferComponent } from './components/offers/new-offer/new-offer.component';
import { EditOfferComponent } from './components/offers/edit-offer/edit-offer.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    OffersNavBarComponent,
    OfferssListComponent,
    OfferItemComponent,
    NavBarComponent,
    NewOfferComponent,
    EditOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({catalogState:OffersReducer}),
    EffectsModule.forRoot([OffersEffects]),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
