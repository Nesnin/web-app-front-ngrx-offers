import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {OffersState, OffersStateEnum} from '../../ngrx/offersReducer';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-offers',
  templateUrl: './Offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offersState$:Observable<OffersState>|null=null;
  readonly OffersStateEnum= OffersStateEnum;
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.offersState$=this.store.pipe(
      map((state)=>  state.catalogState)
    );
  }
}
