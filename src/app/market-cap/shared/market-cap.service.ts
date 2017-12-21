import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MarketCapService {

  constructor(private http: HttpClient) { }

  getMarketCap(limit = 10) {
    try {
      // return this.http.get(environment.ServerUrl);
      return this.http.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
        .map((response) => {
          return response;
        })
        .catch((error: Response) => {
          return Observable.throw(error);
        });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

}
