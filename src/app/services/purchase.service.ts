import { Injectable } from '@angular/core';
import {RequestBaseService} from "./request-base.service";
import {AuthenticationService} from "./authentication.service";
import {HttpClient} from "@angular/common/http";
import {Purchase} from "../models/purchase.model";
import {Observable} from "rxjs";
import {PurchaseItem} from "../models/purchase-item.model";

const API_URL = `http://localhost:8080/api/purchase-history`;

@Injectable({
  providedIn: 'root'
})
export class PurchaseService  extends RequestBaseService{

  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService,http);
  }

  savePurchase(purchase: Purchase): Observable<any> {
    return this.http.post(API_URL, purchase, {headers: this.getHeaders});
  }

  getAllPurchasedItems(): Observable<any> {
    return this.http.get(API_URL, {headers: this.getHeaders});
  }
}
