import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Offer} from '../model/Offer';

@Injectable({providedIn:"root"})
export class OffersService {

  constructor(private http:HttpClient) {
  }

  public getOffers():Observable<Offer[]>{
    let host=Math.random()>0.2?environment.host:environment.unreachableHost;
    //let host=environment.host;
    return this.http.get<Offer[]>(host+"/offers");
    //return throwError("Not Implemented yet");
  }
  public getSelectedOffers():Observable<Offer[]>{
    return this.http.get<Offer[]>(environment.host+"/offers?selected=true");
  }

  public searchOffers(name:string):Observable<Offer[]>{
    return this.http.get<Offer[]>(environment.host+"/offers?name_like="+name);
  }
  public setSelected(product:Offer):Observable<Offer>{
    return this.http.put<Offer>(environment.host+"/offers/"+product.id,{...product,selected:!product.selected});
  }
  public delete(id:number):Observable<void>{
     return this.http.delete<void>(environment.host+"/offers/"+id);
  }
  public save(product:Offer):Observable<Offer>{
    return this.http.post<Offer>(environment.host+"/offers/",product);
  }
  public update(product:Offer):Observable<Offer>{
    return this.http.put<Offer>(environment.host+"/offers/"+product.id,product);
  }
  public getOfferById(id:number):Observable<Offer>{
    return this.http.get<Offer>(environment.host+"/offers/"+id);
  }

}
